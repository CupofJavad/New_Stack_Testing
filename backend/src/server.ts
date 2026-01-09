import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { config } from './config/env';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';
import { pool, query } from './services/database';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = config.apiPort || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
// On Vercel, allow requests from the same origin (Vercel handles this)
const corsOrigin = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : config.frontendUrl || 'http://localhost:5173';

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

// Logging
if (config.appEnv !== 'production') {
  app.use(morgan('dev'));
}

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint (accessible at /api/health from Vercel)
app.get('/api/health', async (_req: Request, res: Response) => {
  try {
    // Test database connection
    let dbStatus = 'disconnected';
    try {
      await query('SELECT NOW()');
      dbStatus = 'connected';
    } catch (dbError) {
      dbStatus = 'error';
      console.error('Database connection error:', dbError);
    }

    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: config.appEnv,
      database: dbStatus,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
    });
  }
});

// Also support /health for direct access
app.get('/health', async (_req: Request, res: Response) => {
  try {
    // Test database connection
    let dbStatus = 'disconnected';
    try {
      await query('SELECT NOW()');
      dbStatus = 'connected';
    } catch (dbError) {
      dbStatus = 'error';
      console.error('Database connection error:', dbError);
    }

    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: config.appEnv,
      database: dbStatus,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
    });
  }
});

// Database connection test endpoint
app.get('/api/db/test', async (_req: Request, res: Response) => {
  try {
    const result = await query('SELECT NOW() as current_time, version() as pg_version');
    res.status(200).json({
      status: 'connected',
      database: config.postgresDb,
      host: config.postgresHost,
      port: config.postgresPort,
      user: config.postgresUser,
      currentTime: result.rows[0].current_time,
      version: result.rows[0].pg_version,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: error.message,
      config: {
        host: config.postgresHost,
        port: config.postgresPort,
        database: config.postgresDb,
        user: config.postgresUser,
      },
    });
  }
});

// API routes - mount at /api
app.use('/api', routes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Export app for both server and serverless
export default app;

// Initialize database connection
async function initializeDatabase() {
  try {
    // Test database connection
    const result = await query('SELECT NOW()');
    console.log('✅ Database connected successfully');
    console.log(`📊 Database: ${config.postgresDb} @ ${config.postgresHost}:${config.postgresPort}`);
    return true;
  } catch (error: any) {
    console.error('❌ Database connection failed:', error.message);
    console.log('⚠️  Server will start but database features will not work');
    console.log('💡 Check your database configuration in environment variables');
    return false;
  }
}

// Start server only if not in serverless environment (Vercel)
if (process.env.VERCEL !== '1' && typeof require !== 'undefined') {
  // Initialize database before starting server
  initializeDatabase().then((dbConnected) => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📝 Environment: ${config.appEnv}`);
      console.log(`🌐 API URL: http://localhost:${PORT}`);
      if (dbConnected) {
        console.log('✅ Backend fully initialized and ready');
      } else {
        console.log('⚠️  Backend running without database connection');
      }
    });
  });
}

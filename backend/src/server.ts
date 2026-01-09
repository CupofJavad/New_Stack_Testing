import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { config } from './config/env';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

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

// Health check endpoint (works at root /health when called from Vercel)
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: config.appEnv,
  });
});

// API routes - mount at root since Vercel already handles /api prefix
app.use('/', routes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server only if not in serverless environment (Vercel)
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📝 Environment: ${config.appEnv}`);
    console.log(`🌐 API URL: http://localhost:${PORT}`);
  });
}

export default app;

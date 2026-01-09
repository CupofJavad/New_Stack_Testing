// Vercel serverless function - CommonJS version
// Import the built Express app (CommonJS output)
const app = require('../backend/dist/server.js').default;

// Vercel serverless function handler
module.exports = (req, res) => {
  try {
    // Adjust path - remove /api prefix since Vercel already routes to /api
    const originalUrl = req.url || req.path || '';
    if (originalUrl.startsWith('/api')) {
      req.url = originalUrl.replace('/api', '') || '/';
      req.path = req.url;
    } else if (!req.url || req.url === '/') {
      // If accessing /api directly, set to root
      req.url = '/';
      req.path = '/';
    }
    
    // Handle the request with Express app
    return app(req, res);
  } catch (error) {
    console.error('Serverless function error:', error);
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
};

// Vercel serverless function - CommonJS version
// Import the built Express app (CommonJS output)

let app;

try {
  // Try to load the built Express app
  app = require('../backend/dist/server.js').default;
} catch (error) {
  console.error('Failed to load Express app:', error);
  // Fallback handler if app fails to load
  module.exports = (req, res) => {
    res.status(500).json({
      error: 'Server Configuration Error',
      message: 'Failed to load Express application',
      details: error.message
    });
  };
  return;
}

// Vercel serverless function handler
module.exports = (req, res) => {
  try {
    // Vercel routes /api/* to this function
    // Express app expects routes at /api/*, so we need to preserve the path
    // But remove the leading /api if it exists (Vercel may pass it)
    const originalUrl = req.url || req.path || '';
    
    // If URL starts with /api, keep it (Express expects /api routes)
    // If it doesn't, add /api prefix
    if (!originalUrl.startsWith('/api')) {
      req.url = '/api' + (originalUrl === '/' ? '' : originalUrl);
      req.path = req.url;
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

// Vercel serverless function - CommonJS version
// Import the built Express app (CommonJS output)

let app;

try {
  // Load the built Express app
  // The build outputs: exports.default = app;
  const serverModule = require('../backend/dist/server.js');
  app = serverModule.default || serverModule;
  
  if (!app) {
    throw new Error('Express app not found in server module');
  }
} catch (error) {
  console.error('Failed to load Express app:', error);
  // Fallback handler if app fails to load
  module.exports = (req, res) => {
    console.error('Serverless function initialization error:', error);
    res.status(500).json({
      error: 'Server Configuration Error',
      message: 'Failed to load Express application',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  };
}

// Vercel serverless function handler
module.exports = (req, res) => {
  try {
    // Vercel routes /api/* requests to this function
    // The Express app has routes mounted at /api, so paths should work as-is
    // But we need to ensure the path is correct
    
    const originalUrl = req.url || req.path || '';
    
    // If the URL doesn't start with /api, add it
    // This handles cases where Vercel strips the prefix
    if (!originalUrl.startsWith('/api') && originalUrl !== '/') {
      req.url = '/api' + originalUrl;
      req.path = req.url;
    } else if (originalUrl === '/') {
      // Root /api request
      req.url = '/api';
      req.path = '/api';
    }
    
    // Handle the request with Express app
    return app(req, res);
  } catch (error) {
    console.error('Serverless function runtime error:', error);
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
};

// Vercel serverless function - JavaScript version for compatibility
// This will work with the built TypeScript output

module.exports = async (req, res) => {
  try {
    // Dynamic import of the built Express app
    const { default: app } = await import('../backend/dist/server.js');
    
    // Adjust path - remove /api prefix since Vercel already routes to /api
    const originalUrl = req.url || '';
    if (originalUrl.startsWith('/api')) {
      req.url = originalUrl.replace('/api', '') || '/';
    }
    
    // Handle the request
    return app(req, res);
  } catch (error) {
    console.error('Serverless function error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

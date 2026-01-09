// Vercel serverless function entry point
import app from '../backend/src/server';

// Vercel serverless function handler
export default function handler(req: any, res: any) {
  // Vercel already routes to /api, so we need to adjust the path
  // Remove /api prefix from the path since Express app expects routes without it
  if (req.url && req.url.startsWith('/api')) {
    req.url = req.url.replace('/api', '') || '/';
  }
  
  return app(req, res);
}

import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth';

// GET /api/users/me
export const getCurrentUser = async (req: AuthRequest, res: Response): Promise<Response> => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // TODO: Fetch user from database
    return res.json({
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /api/users
export const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    // TODO: Fetch all users from database
    return res.json({
      message: 'Get all users endpoint - to be implemented',
      users: [],
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

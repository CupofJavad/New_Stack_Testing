import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './users';

const router = Router();

// API route handlers
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

// Example root API endpoint
router.get('/', (_req, res) => {
  res.json({
    message: 'API is running',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
    },
  });
});

export default router;

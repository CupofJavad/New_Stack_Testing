import { Router, RequestHandler } from 'express';
import { authenticateToken } from '../middleware/auth';
import { getCurrentUser, getAllUsers } from '../controllers/userController';

const router = Router();

// All user routes require authentication
router.use(authenticateToken);

// GET /api/users/me
router.get('/me', getCurrentUser as RequestHandler);

// GET /api/users
router.get('/', getAllUsers as RequestHandler);

export default router;

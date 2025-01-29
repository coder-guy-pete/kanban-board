import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api',authenticateToken, apiRoutes); // Authentication added to API routes to protect them

export default router;

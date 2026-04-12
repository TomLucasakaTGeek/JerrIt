import { Router } from 'express';
import userRoutes from '../modules/user/user.routes.js';

// [IMPORT_ROUTES]

const router = Router();

router.use('/users', userRoutes);

// [USE_ROUTES]

export default router;
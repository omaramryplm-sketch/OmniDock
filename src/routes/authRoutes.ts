import { Router } from 'express';
import { login, requestPasswordReset, resetPassword } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

export default router;

import { Router } from 'express';
import { getViajes, createViaje } from '../controllers/viajesController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/', getViajes);
router.post('/', createViaje);

export default router;

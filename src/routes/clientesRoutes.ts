import { Router } from 'express';
import { getClientes } from '../controllers/clientesController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/', getClientes);

export default router;

import { Router } from 'express';
import { getRecepciones, createRecepcion } from '../controllers/recepcionesController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/', getRecepciones);
router.post('/', createRecepcion);

export default router;

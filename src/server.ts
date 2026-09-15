import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorMiddleware';
import authRoutes from './routes/authRoutes';
import recepcionesRoutes from './routes/recepcionesRoutes';
import viajesRoutes from './routes/viajesRoutes';
import { prisma } from './prisma';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/recepciones', recepcionesRoutes);
app.use('/api/viajes', viajesRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

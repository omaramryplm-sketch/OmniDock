import { Request, Response, NextFunction } from 'express';
import { prisma } from '../prisma';

export const getRecepciones = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recepciones = await prisma.recepcionPatio.findMany({
      include: {
        cliente: true
      },
      orderBy: { creado_en: 'desc' }
    });
    res.json(recepciones);
  } catch (error) {
    next(error);
  }
};

export const createRecepcion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cliente_id, documento_origen, cantidad_planeada } = req.body;
    const nuevaRecepcion = await prisma.recepcionPatio.create({
      data: {
        cliente_id,
        documento_origen,
        cantidad_planeada,
        cantidad_recibida: 0,
        estado: 'En Patio'
      }
    });
    res.status(201).json(nuevaRecepcion);
  } catch (error) {
    next(error);
  }
};

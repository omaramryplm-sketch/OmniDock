import { Request, Response, NextFunction } from 'express';
import { prisma } from '../prisma';

export const getViajes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const viajes = await prisma.viajeConsolidado.findMany({
      orderBy: { creado_en: 'desc' }
    });
    res.json(viajes);
  } catch (error) {
    next(error);
  }
};

export const createViaje = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { unidad_transporte, operador } = req.body;
    const nuevoViaje = await prisma.viajeConsolidado.create({
      data: {
        unidad_transporte,
        operador,
        estado: 'Planeando'
      }
    });
    res.status(201).json(nuevoViaje);
  } catch (error) {
    next(error);
  }
};

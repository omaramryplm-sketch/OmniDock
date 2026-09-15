import { Request, Response, NextFunction } from 'express';
import { prisma } from '../prisma';

export const getClientes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clientes = await prisma.clienteOperacion.findMany({
      orderBy: { nombre_comercial: 'asc' }
    });
    res.json(clientes);
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from 'express';
import { ObtenerClientesQuery } from '../queries/ObtenerClientesQuery';

export const getClientes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = new ObtenerClientesQuery();
    const clientes = await query.execute();
    res.json(clientes);
  } catch (error) {
    next(error);
  }
};

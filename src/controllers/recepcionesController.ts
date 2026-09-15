import { Request, Response, NextFunction } from 'express';
import { ObtenerRecepcionesQuery } from '../queries/ObtenerRecepcionesQuery';
import { CrearRecepcionCommand, CrearRecepcionDTO } from '../commands/CrearRecepcionCommand';

export const getRecepciones = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = new ObtenerRecepcionesQuery();
    const recepciones = await query.execute();
    res.json(recepciones);
  } catch (error) {
    next(error);
  }
};

export const createRecepcion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: CrearRecepcionDTO = req.body;
    const command = new CrearRecepcionCommand();
    const nuevaRecepcion = await command.execute(data);
    res.status(201).json(nuevaRecepcion);
  } catch (error) {
    next(error);
  }
};

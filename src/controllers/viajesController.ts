import { Request, Response, NextFunction } from 'express';
import { ObtenerViajesQuery } from '../queries/ObtenerViajesQuery';
import { CrearViajeCommand, CrearViajeDTO } from '../commands/CrearViajeCommand';

export const getViajes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = new ObtenerViajesQuery();
    const viajes = await query.execute();
    res.json(viajes);
  } catch (error) {
    next(error);
  }
};

export const createViaje = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: CrearViajeDTO = req.body;
    const command = new CrearViajeCommand();
    const nuevoViaje = await command.execute(data);
    res.status(201).json(nuevoViaje);
  } catch (error) {
    next(error);
  }
};

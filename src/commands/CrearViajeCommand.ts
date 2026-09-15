import { prisma } from '../prisma';

export interface CrearViajeDTO {
  unidad_transporte: string;
  operador: string;
}

export class CrearViajeCommand {
  async execute(data: CrearViajeDTO) {
    return await prisma.viajeConsolidado.create({
      data: {
        unidad_transporte: data.unidad_transporte,
        operador: data.operador,
        estado: 'Planeando'
      }
    });
  }
}

import { prisma } from '../prisma';

export interface CrearRecepcionDTO {
  cliente_id: number;
  documento_origen: string;
  cantidad_planeada: number;
}

export class CrearRecepcionCommand {
  async execute(data: CrearRecepcionDTO) {
    return await prisma.recepcionPatio.create({
      data: {
        cliente_id: data.cliente_id,
        documento_origen: data.documento_origen,
        cantidad_planeada: data.cantidad_planeada,
        cantidad_recibida: 0,
        estado: 'En Patio'
      }
    });
  }
}

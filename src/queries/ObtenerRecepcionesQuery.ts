import { prisma } from '../prisma';

export class ObtenerRecepcionesQuery {
  async execute() {
    return await prisma.recepcionPatio.findMany({
      include: {
        cliente: true
      },
      orderBy: { creado_en: 'desc' }
    });
  }
}

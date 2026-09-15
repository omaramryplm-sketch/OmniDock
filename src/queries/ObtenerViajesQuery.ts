import { prisma } from '../prisma';

export class ObtenerViajesQuery {
  async execute() {
    return await prisma.viajeConsolidado.findMany({
      orderBy: { creado_en: 'desc' }
    });
  }
}

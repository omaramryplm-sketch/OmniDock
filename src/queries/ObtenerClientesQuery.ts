import { prisma } from '../prisma';

export class ObtenerClientesQuery {
  async execute() {
    return await prisma.clienteOperacion.findMany({
      orderBy: { nombre_comercial: 'asc' }
    });
  }
}

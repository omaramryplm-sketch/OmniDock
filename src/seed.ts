import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('superadmin123', 10);
  
  const superadmin = await prisma.usuario.upsert({
    where: { email: 'admin@omnidock.com' },
    update: {},
    create: {
      nombre: 'Super Admin',
      email: 'admin@omnidock.com',
      password_hash: passwordHash,
      rol: 'SuperAdmin',
    },
  });
  
  console.log('Superadmin user seeded:', superadmin.email);

  const cliente1 = await prisma.clienteOperacion.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nombre_comercial: 'Logística del Norte',
      rfc: 'LOGN123456789'
    }
  });

  const cliente2 = await prisma.clienteOperacion.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nombre_comercial: 'Comercializadora ABC',
      rfc: 'CABC123456789'
    }
  });

  console.log('Clientes de prueba generados.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

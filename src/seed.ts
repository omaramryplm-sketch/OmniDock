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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

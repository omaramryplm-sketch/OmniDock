import { PrismaClient } from '@prisma/client';

// Prisma client with middleware to increment contador_actualizaciones
export const prisma = new PrismaClient().$extends({
  query: {
    $allModels: {
      async update({ model, operation, args, query }) {
        if (args.data) {
          args.data = {
            ...args.data,
            contador_actualizaciones: {
              increment: 1,
            },
          };
        }
        return query(args);
      },
      async updateMany({ model, operation, args, query }) {
        if (args.data) {
          args.data = {
            ...args.data,
            contador_actualizaciones: {
              increment: 1,
            },
          };
        }
        return query(args);
      },
    },
  },
});

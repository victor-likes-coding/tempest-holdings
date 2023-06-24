// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      fullName: 'User One',
      password: 'password1',
      role: 'user',
      account: {
        create: {
          balance: 1000,
          publicId: 'abc123',
          shares: 100,
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      fullName: 'User Two',
      password: 'password2',
      role: 'user',
      account: {
        create: {
          balance: 2000,
          publicId: 'def456',
          shares: 3000,
        },
      },
    },
  });

  console.log('Users and accounts seeded successfully');
}

seed()
  .catch((error) => {
    console.error('Seed failed:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

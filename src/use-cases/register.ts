import { prisma } from '@/lib/prisma';
import { hash } from 'bcryptjs';

interface IRegisterUseCase {
  name: string;
  password: string;
  email: string;
}

export async function registerUseCase({
  name,
  email,
  password,
}: IRegisterUseCase) {
  const password_hash = await hash(password, 6);

  const userAlreadyHaveSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userAlreadyHaveSameEmail) throw new Error('Email already exists.');

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash,
    },
  });
}

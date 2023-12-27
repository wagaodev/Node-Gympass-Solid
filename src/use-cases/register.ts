import { UsersRepository } from '@/repositories/users-repository';
import { hash } from 'bcryptjs';

interface IExecute {
  name: string;
  password: string;
  email: string;
}

export class RegisterUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ name, email, password }: IExecute) {
    const password_hash = await hash(password, 6);

    const userAlreadyHaveSameEmail =
      await this.userRepository.findByEmail(email);

    if (userAlreadyHaveSameEmail) {
      throw new Error('Email already exists.');
    }

    await this.userRepository.create({
      name,
      email,
      password_hash,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async create(data): Promise<any> {
    try {
      const newUser = this.usersRepository.create(data);
      await this.usersRepository.save(newUser);
      return newUser;
    } catch (error) {
      return {
        message: 'Error al crear la entidad:', error
      };
    }
  }

  async update(id: number, data): Promise<any> {
    try {
      const entidadExistente = await this.usersRepository.findOneBy({id});

      if (!entidadExistente) {
        return {
          message: 'Entidad no encontrada'
        }
      }

      this.usersRepository.merge(entidadExistente, data);
      const entidadActualizada = await this.usersRepository.save(entidadExistente);

      return entidadActualizada;
    } catch (error) {
      return {
        message: 'Error al actualizar la entidad:', error
      };
    }
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
import { Injectable, Logger } from '@nestjs/common';
import TypeRepository from '../../domain/repositories/type.repository.js';
import { RegisterTypeDto } from '../dto/register-type.dto.js';
import TypeEntity from '../../domain/entities/type.entity.js';

@Injectable()
export default class RegisterTypeUseCase {
  private readonly logger = new Logger(RegisterTypeUseCase.name);
  constructor(private readonly typeRepository: TypeRepository) {}
  async execute(data: RegisterTypeDto): Promise<TypeEntity> {
    try {
      return await this.typeRepository.create(data.name);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

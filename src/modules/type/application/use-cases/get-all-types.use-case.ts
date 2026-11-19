import { Injectable, Logger } from '@nestjs/common';
import TypeRepository from '../../domain/repositories/type.repository.js';

@Injectable()
export default class GetAllTypesUseCase {
  private readonly logger = new Logger(GetAllTypesUseCase.name);
  constructor(private readonly typeRepository: TypeRepository) {}

  async execute() {
    try {
      return await this.typeRepository.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

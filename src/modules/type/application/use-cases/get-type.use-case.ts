import { Injectable, Logger } from '@nestjs/common';
import TypeRepository from '../../domain/repositories/type.repository.js';

@Injectable()
export default class GetTypeUseCase {
  private readonly logger = new Logger(GetTypeUseCase.name);
  constructor(private readonly repository: TypeRepository) {}

  async execute(id: string) {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import TypeRepository from '../../domain/repositories/type.repository.js';

@Injectable()
export default class DeleteTypeUseCase {
  private readonly logger = new Logger(DeleteTypeUseCase.name);
  constructor(private readonly typeRepository: TypeRepository) {}

  async execute(id: string): Promise<void> {
    try {
      const existingType = await this.typeRepository.findById(id);
      if (!existingType) {
        throw new BadRequestException('Type not found');
      }
      return await this.typeRepository.delete(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

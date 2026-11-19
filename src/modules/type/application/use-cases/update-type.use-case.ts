import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import TypeRepository from '../../domain/repositories/type.repository.js';
import TypeEntity from '../../domain/entities/type.entity.js';
import UpdateTypeDto from '../dto/update-type.dto.js';

@Injectable()
export default class UpdateTypeUseCase {
  private readonly logger = new Logger(UpdateTypeUseCase.name);
  constructor(private readonly repository: TypeRepository) {}
  async execute(id: string, data: UpdateTypeDto): Promise<TypeEntity | null> {
    try {
      const existingType = await this.repository.findById(id);
      if (!existingType) {
        throw new BadRequestException('Type not found');
      }
      return await this.repository.update(id, data.name);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

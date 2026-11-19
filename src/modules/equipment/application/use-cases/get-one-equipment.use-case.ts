import { Injectable, Logger } from '@nestjs/common';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';

@Injectable()
export class GetOneEquipmentUseCase {
  private readonly logger = new Logger(GetOneEquipmentUseCase.name);
  constructor(private readonly equipmentRepository: EquipmentRepository) {}

  async execute(id: string) {
    try {
      return await this.equipmentRepository.findById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';

@Injectable()
export class UpdateEquipmentUseCase {
  private readonly logger = new Logger(UpdateEquipmentUseCase.name);

  constructor(private readonly equipmentRepository: EquipmentRepository) {}

  async execute(
    id: string,
    data: { model?: string; parentEquipmentId?: string },
  ) {
    try {
      return await this.equipmentRepository.update(
        id,
        data.model,
        data.parentEquipmentId,
      );
    } catch (error) {
      this.logger.error(`Error updating equipment with ID: ${id}`, error);
      throw error;
    }
  }
}

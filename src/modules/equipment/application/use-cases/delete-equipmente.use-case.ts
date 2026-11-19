import { Injectable, Logger } from '@nestjs/common';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';

@Injectable()
export default class DeleteEquipmentUseCase {
  private readonly logger = new Logger(DeleteEquipmentUseCase.name);
  constructor(private readonly equipmentRepository: EquipmentRepository) {}

  async execute(id: string) {
    try {
      const equipment = await this.equipmentRepository.findById(id);
      if (!equipment) {
        return {
          statusCode: 404,
          message: `Equipment with ID ${id} not found`,
        };
      }
      await this.equipmentRepository.delete(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

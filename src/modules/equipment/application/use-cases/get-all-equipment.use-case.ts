import { Injectable, Logger } from '@nestjs/common';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';

@Injectable()
export class GetAllEquipmentsUseCase {
  private readonly logger = new Logger(GetAllEquipmentsUseCase.name);
  constructor(private readonly equipmentRepository: EquipmentRepository) {}
  async execute() {
    try {
      return await this.equipmentRepository.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { RegisterEquipmentDto } from '../dto/register-equipment.dto.js';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';

@Injectable()
export class RegisterEquipmentUsecase {
  private readonly logger = new Logger(RegisterEquipmentUsecase.name);

  constructor(
    private readonly registerEquimentRepository: EquipmentRepository,
  ) {}

  async execute(data: RegisterEquipmentDto) {
    try {
      return await this.registerEquimentRepository.create(
        data.model,
        data.type_id,
        data.parentEquipmentId,
      );
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

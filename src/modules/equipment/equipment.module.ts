import { Module } from '@nestjs/common';
import { EquipmentModel } from './infrastructure/models/equipment.model.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { EquipmentController } from './presentation/controller/equipment.controller.js';
import { EquipmentRepository } from './domain/repositories/equipment-repository.repository.js';
import { EquipmentRepositoryImpl } from './infrastructure/repositories/equipment.repository.impl.js';
import { RegisterEquipmentUsecase } from './application/use-cases/register-equipment.use-case.js';
import { GetAllEquipmentsUseCase } from './application/use-cases/get-all-equipment.use-case.js';
import { GetOneEquipmentUseCase } from './application/use-cases/get-one-equipment.use-case.js';
import { UpdateEquipmentUseCase } from './application/use-cases/update-equipment.use-case.js';
import DeleteEquipmentUseCase from './application/use-cases/delete-equipmente.use-case.js';

@Module({
  imports: [SequelizeModule.forFeature([EquipmentModel])],
  controllers: [EquipmentController],
  providers: [
    {
      provide: EquipmentRepository,
      useClass: EquipmentRepositoryImpl,
    },
    RegisterEquipmentUsecase,
    GetAllEquipmentsUseCase,
    GetOneEquipmentUseCase,
    UpdateEquipmentUseCase,
    DeleteEquipmentUseCase,
  ],
  exports: [EquipmentRepository],
})
export class EquipmentModule {}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let EquipmentModule = class EquipmentModule {
};
EquipmentModule = __decorate([
    Module({
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
], EquipmentModule);
export { EquipmentModule };
//# sourceMappingURL=equipment.module.js.map
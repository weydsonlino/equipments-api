var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DeleteEquipmentUseCase_1;
import { Injectable, Logger } from '@nestjs/common';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
let DeleteEquipmentUseCase = DeleteEquipmentUseCase_1 = class DeleteEquipmentUseCase {
    equipmentRepository;
    logger = new Logger(DeleteEquipmentUseCase_1.name);
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(id) {
        try {
            const equipment = await this.equipmentRepository.findById(id);
            if (!equipment) {
                return {
                    statusCode: 404,
                    message: `Equipment with ID ${id} not found`,
                };
            }
            await this.equipmentRepository.delete(id);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
DeleteEquipmentUseCase = DeleteEquipmentUseCase_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [EquipmentRepository])
], DeleteEquipmentUseCase);
export default DeleteEquipmentUseCase;
//# sourceMappingURL=delete-equipmente.use-case.js.map
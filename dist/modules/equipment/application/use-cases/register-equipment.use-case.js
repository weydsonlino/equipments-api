var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RegisterEquipmentUsecase_1;
import { Injectable, Logger } from '@nestjs/common';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
let RegisterEquipmentUsecase = RegisterEquipmentUsecase_1 = class RegisterEquipmentUsecase {
    registerEquimentRepository;
    logger = new Logger(RegisterEquipmentUsecase_1.name);
    constructor(registerEquimentRepository) {
        this.registerEquimentRepository = registerEquimentRepository;
    }
    async execute(data) {
        try {
            return await this.registerEquimentRepository.create(data.model, data.type_id, data.parentEquipmentId);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
RegisterEquipmentUsecase = RegisterEquipmentUsecase_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [EquipmentRepository])
], RegisterEquipmentUsecase);
export { RegisterEquipmentUsecase };
//# sourceMappingURL=register-equipment.use-case.js.map
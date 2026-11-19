var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, } from '@nestjs/common';
import { RegisterEquipmentUsecase } from '../../application/use-cases/register-equipment.use-case.js';
import { RegisterEquipmentDto } from '../../application/dto/register-equipment.dto.js';
import { GetAllEquipmentsUseCase } from '../../application/use-cases/get-all-equipment.use-case.js';
import { GetOneEquipmentUseCase } from '../../application/use-cases/get-one-equipment.use-case.js';
import { UpdateEquipmentDto } from '../../application/dto/update-equipment.dto.js';
import { UpdateEquipmentUseCase } from '../../application/use-cases/update-equipment.use-case.js';
import DeleteEquipmentUseCase from '../../application/use-cases/delete-equipmente.use-case.js';
let EquipmentController = class EquipmentController {
    registerEquipmentUseCase;
    getAllEquipmentsUseCase;
    getOneEquipmentUseCase;
    updateEquipmentUseCase;
    deleteEquipmentUseCase;
    constructor(registerEquipmentUseCase, getAllEquipmentsUseCase, getOneEquipmentUseCase, updateEquipmentUseCase, deleteEquipmentUseCase) {
        this.registerEquipmentUseCase = registerEquipmentUseCase;
        this.getAllEquipmentsUseCase = getAllEquipmentsUseCase;
        this.getOneEquipmentUseCase = getOneEquipmentUseCase;
        this.updateEquipmentUseCase = updateEquipmentUseCase;
        this.deleteEquipmentUseCase = deleteEquipmentUseCase;
    }
    async register(registerEquipmentDto) {
        return await this.registerEquipmentUseCase.execute(registerEquipmentDto);
    }
    async getAll() {
        return await this.getAllEquipmentsUseCase.execute();
    }
    async getOne(id) {
        return await this.getOneEquipmentUseCase.execute(id);
    }
    async update(id, updateEquipmentDto) {
        return await this.updateEquipmentUseCase.execute(id, updateEquipmentDto);
    }
    async delete(id) {
        return await this.deleteEquipmentUseCase.execute(id);
    }
};
__decorate([
    Post('register'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterEquipmentDto]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "register", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "getAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', new ParseUUIDPipe({ version: '7' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "getOne", null);
__decorate([
    Put(':id'),
    __param(0, Param('id', new ParseUUIDPipe({ version: '7' }))),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateEquipmentDto]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', new ParseUUIDPipe({ version: '7' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "delete", null);
EquipmentController = __decorate([
    Controller('equipments'),
    __metadata("design:paramtypes", [RegisterEquipmentUsecase,
        GetAllEquipmentsUseCase,
        GetOneEquipmentUseCase,
        UpdateEquipmentUseCase,
        DeleteEquipmentUseCase])
], EquipmentController);
export { EquipmentController };
//# sourceMappingURL=equipment.controller.js.map
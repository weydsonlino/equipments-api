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
import { RegisterTypeDto } from '../../application/dto/register-type.dto.js';
import RegisterTypeUseCase from '../../application/use-cases/register-type.use-case.js';
import GetAllTypesUseCase from '../../application/use-cases/get-all-types.use-case.js';
import GetTypeUseCase from '../../application/use-cases/get-type.use-case.js';
import UpdateTypeUseCase from '../../application/use-cases/update-type.use-case.js';
import DeleteTypeUseCase from '../../application/use-cases/delete-type.use-case.js';
import UpdateTypeDto from '../../application/dto/update-type.dto.js';
let TypeController = class TypeController {
    registerTypeUseCase;
    getAllTypesUseCase;
    getTypeUseCase;
    updateTypeUseCase;
    deleteTypeUseCase;
    constructor(registerTypeUseCase, getAllTypesUseCase, getTypeUseCase, updateTypeUseCase, deleteTypeUseCase) {
        this.registerTypeUseCase = registerTypeUseCase;
        this.getAllTypesUseCase = getAllTypesUseCase;
        this.getTypeUseCase = getTypeUseCase;
        this.updateTypeUseCase = updateTypeUseCase;
        this.deleteTypeUseCase = deleteTypeUseCase;
    }
    async registerType(registerTypeDto) {
        return await this.registerTypeUseCase.execute(registerTypeDto);
    }
    async getTypeById(id) {
        return await this.getTypeUseCase.execute(id);
    }
    async getAllTypes() {
        return await this.getAllTypesUseCase.execute();
    }
    async updateType(id, updateTypeDto) {
        return await this.updateTypeUseCase.execute(id, updateTypeDto);
    }
    async deleteType(id) {
        return await this.deleteTypeUseCase.execute(id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "registerType", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', new ParseUUIDPipe({ version: '7' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getTypeById", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getAllTypes", null);
__decorate([
    Put(':id'),
    __param(0, Param('id', new ParseUUIDPipe({ version: '7' }))),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "updateType", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', new ParseUUIDPipe({ version: '7' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "deleteType", null);
TypeController = __decorate([
    Controller('types'),
    __metadata("design:paramtypes", [RegisterTypeUseCase,
        GetAllTypesUseCase,
        GetTypeUseCase,
        UpdateTypeUseCase,
        DeleteTypeUseCase])
], TypeController);
export default TypeController;
//# sourceMappingURL=type.controller.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GetAllTypesUseCase_1;
import { Injectable, Logger } from '@nestjs/common';
import TypeRepository from '../../domain/repositories/type.repository.js';
let GetAllTypesUseCase = GetAllTypesUseCase_1 = class GetAllTypesUseCase {
    typeRepository;
    logger = new Logger(GetAllTypesUseCase_1.name);
    constructor(typeRepository) {
        this.typeRepository = typeRepository;
    }
    async execute() {
        try {
            return await this.typeRepository.findAll();
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
GetAllTypesUseCase = GetAllTypesUseCase_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [TypeRepository])
], GetAllTypesUseCase);
export default GetAllTypesUseCase;
//# sourceMappingURL=get-all-types.use-case.js.map
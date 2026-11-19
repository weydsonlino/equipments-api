var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UpdateTypeUseCase_1;
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import TypeRepository from '../../domain/repositories/type.repository.js';
let UpdateTypeUseCase = UpdateTypeUseCase_1 = class UpdateTypeUseCase {
    repository;
    logger = new Logger(UpdateTypeUseCase_1.name);
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, data) {
        try {
            const existingType = await this.repository.findById(id);
            if (!existingType) {
                throw new BadRequestException('Type not found');
            }
            return await this.repository.update(id, data.name);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
UpdateTypeUseCase = UpdateTypeUseCase_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [TypeRepository])
], UpdateTypeUseCase);
export default UpdateTypeUseCase;
//# sourceMappingURL=update-type.use-case.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeModel } from './infrastructure/model/type.model.js';
import { SequelizeModule } from '@nestjs/sequelize';
import TypeController from './presentation/controller/type.controller.js';
import TypeRepositoryImpl from './infrastructure/repositories/type.repository.impl.js';
import TypeRepository from './domain/repositories/type.repository.js';
import RegisterTypeUseCase from './application/use-cases/register-type.use-case.js';
import GetAllTypesUseCase from './application/use-cases/get-all-types.use-case.js';
import GetTypeUseCase from './application/use-cases/get-type.use-case.js';
import UpdateTypeUseCase from './application/use-cases/update-type.use-case.js';
import DeleteTypeUseCase from './application/use-cases/delete-type.use-case.js';
let TypeModule = class TypeModule {
};
TypeModule = __decorate([
    Module({
        imports: [SequelizeModule.forFeature([TypeModel])],
        controllers: [TypeController],
        providers: [
            {
                provide: TypeRepository,
                useClass: TypeRepositoryImpl,
            },
            RegisterTypeUseCase,
            GetAllTypesUseCase,
            GetTypeUseCase,
            UpdateTypeUseCase,
            DeleteTypeUseCase,
        ],
        exports: [],
    })
], TypeModule);
export { TypeModule };
//# sourceMappingURL=type.module.js.map
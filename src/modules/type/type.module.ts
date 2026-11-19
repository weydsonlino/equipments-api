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

@Module({
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
export class TypeModule {}

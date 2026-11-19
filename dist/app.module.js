var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { EquipmentModule } from './modules/equipment/equipment.module.js';
import { TypeModule } from './modules/type/type.module.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                database: process.env.DB_NAME,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                autoLoadModels: true,
                synchronize: true,
            }),
            EquipmentModule,
            TypeModule,
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
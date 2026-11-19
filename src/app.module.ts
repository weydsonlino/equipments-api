import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { EquipmentModule } from './modules/equipment/equipment.module.js';
import { TypeModule } from './modules/type/type.module.js';

@Module({
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
export class AppModule {}

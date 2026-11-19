import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { RegisterEquipmentUsecase } from '../../application/use-cases/register-equipment.use-case.js';
import { RegisterEquipmentDto } from '../../application/dto/register-equipment.dto.js';
import { GetAllEquipmentsUseCase } from '../../application/use-cases/get-all-equipment.use-case.js';
import { GetOneEquipmentUseCase } from '../../application/use-cases/get-one-equipment.use-case.js';
import { UpdateEquipmentDto } from '../../application/dto/update-equipment.dto.js';
import { UpdateEquipmentUseCase } from '../../application/use-cases/update-equipment.use-case.js';
import DeleteEquipmentUseCase from '../../application/use-cases/delete-equipmente.use-case.js';

@Controller('equipments')
export class EquipmentController {
  constructor(
    private readonly registerEquipmentUseCase: RegisterEquipmentUsecase,
    private readonly getAllEquipmentsUseCase: GetAllEquipmentsUseCase,
    private readonly getOneEquipmentUseCase: GetOneEquipmentUseCase,
    private readonly updateEquipmentUseCase: UpdateEquipmentUseCase,
    private readonly deleteEquipmentUseCase: DeleteEquipmentUseCase,
  ) {}

  @Post('register')
  async register(@Body() registerEquipmentDto: RegisterEquipmentDto) {
    return await this.registerEquipmentUseCase.execute(registerEquipmentDto);
  }

  @Get()
  async getAll() {
    return await this.getAllEquipmentsUseCase.execute();
  }

  @Get(':id')
  async getOne(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return await this.getOneEquipmentUseCase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '7' })) id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return await this.updateEquipmentUseCase.execute(id, updateEquipmentDto);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return await this.deleteEquipmentUseCase.execute(id);
  }
}

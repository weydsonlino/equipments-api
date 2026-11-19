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
import { RegisterTypeDto } from '../../application/dto/register-type.dto.js';
import RegisterTypeUseCase from '../../application/use-cases/register-type.use-case.js';
import GetAllTypesUseCase from '../../application/use-cases/get-all-types.use-case.js';
import GetTypeUseCase from '../../application/use-cases/get-type.use-case.js';
import UpdateTypeUseCase from '../../application/use-cases/update-type.use-case.js';
import DeleteTypeUseCase from '../../application/use-cases/delete-type.use-case.js';
import UpdateTypeDto from '../../application/dto/update-type.dto.js';

@Controller('types')
export default class TypeController {
  constructor(
    private readonly registerTypeUseCase: RegisterTypeUseCase,
    private readonly getAllTypesUseCase: GetAllTypesUseCase,
    private readonly getTypeUseCase: GetTypeUseCase,
    private readonly updateTypeUseCase: UpdateTypeUseCase,
    private readonly deleteTypeUseCase: DeleteTypeUseCase,
  ) {}

  @Post()
  async registerType(@Body() registerTypeDto: RegisterTypeDto) {
    return await this.registerTypeUseCase.execute(registerTypeDto);
  }

  @Get(':id')
  async getTypeById(
    @Param('id', new ParseUUIDPipe({ version: '7' })) id: string,
  ) {
    return await this.getTypeUseCase.execute(id);
  }

  @Get()
  async getAllTypes() {
    return await this.getAllTypesUseCase.execute();
  }

  @Put(':id')
  async updateType(
    @Param('id', new ParseUUIDPipe({ version: '7' })) id: string,
    @Body() updateTypeDto: UpdateTypeDto,
  ) {
    return await this.updateTypeUseCase.execute(id, updateTypeDto);
  }

  @Delete(':id')
  async deleteType(
    @Param('id', new ParseUUIDPipe({ version: '7' })) id: string,
  ) {
    return await this.deleteTypeUseCase.execute(id);
  }
}

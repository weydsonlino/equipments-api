import { Injectable } from '@nestjs/common';
import TypeEntity from '../../domain/entities/type.entity.js';
import TypeRepository from '../../domain/repositories/type.repository.js';
import { InjectModel } from '@nestjs/sequelize';
import { TypeModel } from '../model/type.model.js';
import TypeMapper from '../mappers/type.mapper.js';
import { EquipmentModel } from '../../../equipment/infrastructure/models/equipment.model.js';

@Injectable()
export default class TypeRepositoryImpl implements TypeRepository {
  constructor(@InjectModel(TypeModel) private model: typeof TypeModel) {}

  async findById(id: string): Promise<TypeEntity | null> {
    const type = await this.model.findByPk(id, {
      include: [
        {
          model: EquipmentModel,
        },
      ],
    });
    return type ? TypeMapper.toEntity(type) : null;
  }
  async findAll(): Promise<TypeEntity[]> {
    const types = await this.model.findAll({
      include: [
        {
          model: EquipmentModel,
        },
      ],
    });
    return types.map((type) => TypeMapper.toEntity(type));
  }
  async create(name: string): Promise<TypeEntity> {
    const type = await this.model.create({ name });
    return TypeMapper.toEntity(type);
  }

  async update(id: string, name?: string): Promise<TypeEntity> {
    const [, updatedTypes] = await this.model.update(
      { name },
      { where: { id }, returning: true },
    );
    return TypeMapper.toEntity(updatedTypes[0].dataValues);
  }
  async delete(id: string): Promise<void> {
    await this.model.destroy({ where: { id } });
    return;
  }
}

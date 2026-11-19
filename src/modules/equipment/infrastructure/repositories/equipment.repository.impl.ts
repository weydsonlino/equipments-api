import { Injectable } from '@nestjs/common';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
import { InjectModel } from '@nestjs/sequelize';
import { EquipmentModel } from '../models/equipment.model.js';
import { EquipmentEntity } from '../../domain/entities/equipment.entity.js';
import { EquipmentMapper } from '../mappers/equipment.mapper.js';
import { TypeModel } from '../../../type/infrastructure/model/type.model.js';

@Injectable()
export class EquipmentRepositoryImpl implements EquipmentRepository {
  constructor(
    @InjectModel(EquipmentModel) private model: typeof EquipmentModel,
  ) {}
  async delete(id: string): Promise<void> {
    await this.model.destroy({ where: { id } });
  }

  async update(
    id: string,
    model?: string,
    typeId?: string,
    parentEquipmentId?: string,
  ): Promise<EquipmentEntity | null> {
    const equipment = await this.model.findByPk(id, {
      include: [
        {
          model: EquipmentModel,
          as: 'parentEquipment',
        },
        {
          model: TypeModel,
          as: 'type',
        },
      ],
    });

    if (!equipment) {
      return null;
    }

    const values: { model?: string; parent_equipment_id?: string } = {};
    if (model !== undefined) values.model = model;
    if (parentEquipmentId !== undefined) {
      values.parent_equipment_id = parentEquipmentId;
    }

    if (Object.keys(values).length > 0) {
      await equipment.update(values);
    }

    return EquipmentMapper.toEntity(equipment.dataValues);
  }
  async findById(id: string): Promise<EquipmentEntity | null> {
    const equipment = await this.model.findByPk(id, {
      include: [
        {
          model: EquipmentModel,
          as: 'parentEquipment',
        },
        {
          model: EquipmentModel,
          as: 'components',
        },
        {
          model: TypeModel,
          as: 'type',
        },
      ],
    });

    return equipment ? EquipmentMapper.toEntity(equipment.dataValues) : null;
  }
  async findAll(): Promise<EquipmentEntity[]> {
    const equipment = await this.model.findAll({
      include: [
        {
          model: EquipmentModel,
          as: 'parentEquipment',
        },
        {
          model: TypeModel,
          as: 'type',
        },
      ],
    });

    return equipment.map((item) => EquipmentMapper.toEntity(item.dataValues));
  }

  async create(
    model: string,
    typeId: string,
    parentEquipmentId?: string,
  ): Promise<EquipmentEntity> {
    console.log(model, parentEquipmentId);
    const equipment = await this.model.create({
      model,
      type_id: typeId,
      parent_equipment_id: parentEquipmentId,
    });

    return EquipmentMapper.toEntity(equipment.dataValues);
  }
}

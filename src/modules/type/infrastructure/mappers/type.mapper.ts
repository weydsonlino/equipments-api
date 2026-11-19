import { EquipmentMapper } from '../../../equipment/infrastructure/mappers/equipment.mapper.js';
import TypeEntity from '../../domain/entities/type.entity.js';
import { TypeModel } from '../model/type.model.js';

export default class TypeMapper {
  static toEntity(model: TypeModel): TypeEntity {
    const type = new TypeEntity(model.id, model.name);

    if (model?.equipments && model.equipments.length > 0) {
      type.Equipment = model.equipments.map((equipment) =>
        EquipmentMapper.toEntity(equipment.dataValues),
      );
    }

    return type;
  }
}

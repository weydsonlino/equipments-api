import TypeMapper from '../../../type/infrastructure/mappers/type.mapper.js';
import { EquipmentEntity } from '../../domain/entities/equipment.entity.js';
export class EquipmentMapper {
    static toEntity(model) {
        const equipment = new EquipmentEntity(model.id, model.model, model.parent_equipment_id, model.type_id);
        if (model?.components && model.components.length > 0) {
            equipment.components = model.components.map((component) => EquipmentMapper.toEntity(component.dataValues));
        }
        if (model?.parentEquipment) {
            equipment.parentEquipment = EquipmentMapper.toEntity(model.parentEquipment.dataValues);
        }
        if (model?.type) {
            equipment.type = TypeMapper.toEntity(model.type.dataValues);
        }
        return equipment;
    }
}
//# sourceMappingURL=equipment.mapper.js.map
import { EquipmentEntity } from '../../domain/entities/equipment.entity.js';
import { EquipmentModel } from '../models/equipment.model.js';
export declare class EquipmentMapper {
    static toEntity(model: EquipmentModel): EquipmentEntity;
}

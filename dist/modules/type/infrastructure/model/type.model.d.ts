import { Model } from 'sequelize-typescript';
import { EquipmentModel } from '../../../equipment/infrastructure/models/equipment.model.js';
export declare class TypeModel extends Model<TypeModel, Partial<TypeModel>> {
    id: string;
    name: string;
    equipments: EquipmentModel[];
    created_at: Date;
    updated_at: Date;
}

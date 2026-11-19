import { Model } from 'sequelize-typescript';
import { TypeModel } from '../../../type/infrastructure/model/type.model.js';
export declare class EquipmentModel extends Model<EquipmentModel, Partial<EquipmentModel>> {
    id: string;
    model: string;
    parent_equipment_id: string | null;
    type_id: string;
    components: EquipmentModel[];
    parentEquipment: EquipmentModel | null;
    type: TypeModel;
    created_at: Date;
    updated_at: Date;
}

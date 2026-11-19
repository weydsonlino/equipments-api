import TypeEntity from '../../../type/domain/entities/type.entity.js';
export declare class EquipmentEntity {
    readonly id: string;
    readonly model: string;
    readonly parent_equipment_id: string | null;
    readonly type_id: string;
    components: EquipmentEntity[];
    type?: TypeEntity | undefined;
    parentEquipment?: EquipmentEntity | undefined;
    constructor(id: string, model: string, parent_equipment_id: string | null, type_id: string, components?: EquipmentEntity[], type?: TypeEntity | undefined, parentEquipment?: EquipmentEntity | undefined);
    toJSON(): this & {
        parent_equipment_id: string | undefined;
        type: TypeEntity | undefined;
        components: EquipmentEntity[] | undefined;
        parentEquipment: EquipmentEntity | undefined;
    };
}

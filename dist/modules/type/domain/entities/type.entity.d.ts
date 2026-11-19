import { EquipmentEntity } from '../../../equipment/domain/entities/equipment.entity.js';
export default class TypeEntity {
    readonly id: string;
    readonly name: string;
    Equipment: EquipmentEntity[];
    constructor(id: string, name: string, Equipment?: EquipmentEntity[]);
    toJSON(): this & {
        Equipment: EquipmentEntity[] | undefined;
    };
}

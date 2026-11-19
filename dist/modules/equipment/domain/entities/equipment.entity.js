export class EquipmentEntity {
    id;
    model;
    parent_equipment_id;
    type_id;
    components;
    type;
    parentEquipment;
    constructor(id, model, parent_equipment_id, type_id, components = [], type, parentEquipment) {
        this.id = id;
        this.model = model;
        this.parent_equipment_id = parent_equipment_id;
        this.type_id = type_id;
        this.components = components;
        this.type = type;
        this.parentEquipment = parentEquipment;
    }
    toJSON() {
        return {
            ...this,
            parent_equipment_id: this.parent_equipment_id !== null
                ? this.parent_equipment_id
                : undefined,
            type: this.type !== null ? this.type : undefined,
            components: this.components !== null ? this.components : undefined,
            parentEquipment: this.parentEquipment !== null ? this.parentEquipment : undefined,
        };
    }
}
//# sourceMappingURL=equipment.entity.js.map
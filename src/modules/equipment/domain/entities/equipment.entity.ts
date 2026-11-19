import TypeEntity from '../../../type/domain/entities/type.entity.js';

export class EquipmentEntity {
  constructor(
    public readonly id: string,
    public readonly model: string,
    public readonly parent_equipment_id: string | null,
    public readonly type_id: string,
    public components: EquipmentEntity[] = [],
    public type?: TypeEntity,
    public parentEquipment?: EquipmentEntity,
  ) {}

  toJSON() {
    return {
      ...this,
      parent_equipment_id:
        this.parent_equipment_id !== null
          ? this.parent_equipment_id
          : undefined,
      type: this.type !== null ? this.type : undefined,
      components: this.components !== null ? this.components : undefined,
      parentEquipment:
        this.parentEquipment !== null ? this.parentEquipment : undefined,
    };
  }
}

import { EquipmentEntity } from '../../../equipment/domain/entities/equipment.entity.js';

export default class TypeEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public Equipment: EquipmentEntity[] = [],
  ) {}

  toJSON() {
    return {
      ...this,
      Equipment: this.Equipment !== null ? this.Equipment : undefined,
    };
  }
}

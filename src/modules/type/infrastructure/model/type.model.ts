import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { uuidv7 } from 'uuidv7';
import { EquipmentModel } from '../../../equipment/infrastructure/models/equipment.model.js';

@Table({
  tableName: 'type',
  timestamps: true,
  underscored: true,
})
export class TypeModel extends Model<TypeModel, Partial<TypeModel>> {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv7,
    primaryKey: true,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @HasMany(() => EquipmentModel, 'type_id')
  declare equipments: EquipmentModel[];

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}

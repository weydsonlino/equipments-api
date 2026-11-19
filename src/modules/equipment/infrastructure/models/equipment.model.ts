import {
  Table,
  Model,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { uuidv7 } from 'uuidv7';
import { TypeModel } from '../../../type/infrastructure/model/type.model.js';

@Table({
  tableName: 'equipment',
  timestamps: true,
  underscored: true,
})
export class EquipmentModel extends Model<
  EquipmentModel,
  Partial<EquipmentModel>
> {
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
  model: string;

  @ForeignKey(() => EquipmentModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  declare parent_equipment_id: string | null;

  @ForeignKey(() => TypeModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare type_id: string;

  // Equipamentos que são componentes deste equipamento
  @HasMany(() => EquipmentModel, 'parent_equipment_id')
  declare components: EquipmentModel[];

  // Equipamento principal deste componente
  @BelongsTo(() => EquipmentModel, 'parent_equipment_id')
  declare parentEquipment: EquipmentModel | null;

  @BelongsTo(() => TypeModel, 'type_id')
  declare type: TypeModel;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}

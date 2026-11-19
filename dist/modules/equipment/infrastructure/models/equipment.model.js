var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Model, Column, DataType, CreatedAt, UpdatedAt, HasMany, ForeignKey, BelongsTo, } from 'sequelize-typescript';
import { uuidv7 } from 'uuidv7';
import { TypeModel } from '../../../type/infrastructure/model/type.model.js';
let EquipmentModel = class EquipmentModel extends Model {
    model;
    created_at;
    updated_at;
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: uuidv7,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], EquipmentModel.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], EquipmentModel.prototype, "model", void 0);
__decorate([
    ForeignKey(() => EquipmentModel),
    Column({
        type: DataType.UUID,
        allowNull: true,
    }),
    __metadata("design:type", Object)
], EquipmentModel.prototype, "parent_equipment_id", void 0);
__decorate([
    ForeignKey(() => TypeModel),
    Column({
        type: DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", String)
], EquipmentModel.prototype, "type_id", void 0);
__decorate([
    HasMany(() => EquipmentModel, 'parent_equipment_id'),
    __metadata("design:type", Array)
], EquipmentModel.prototype, "components", void 0);
__decorate([
    BelongsTo(() => EquipmentModel, 'parent_equipment_id'),
    __metadata("design:type", Object)
], EquipmentModel.prototype, "parentEquipment", void 0);
__decorate([
    BelongsTo(() => TypeModel, 'type_id'),
    __metadata("design:type", TypeModel)
], EquipmentModel.prototype, "type", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], EquipmentModel.prototype, "created_at", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], EquipmentModel.prototype, "updated_at", void 0);
EquipmentModel = __decorate([
    Table({
        tableName: 'equipment',
        timestamps: true,
        underscored: true,
    })
], EquipmentModel);
export { EquipmentModel };
//# sourceMappingURL=equipment.model.js.map
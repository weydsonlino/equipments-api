var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreatedAt, DataType, HasMany, Model, Table, UpdatedAt, } from 'sequelize-typescript';
import { uuidv7 } from 'uuidv7';
import { EquipmentModel } from '../../../equipment/infrastructure/models/equipment.model.js';
let TypeModel = class TypeModel extends Model {
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
], TypeModel.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], TypeModel.prototype, "name", void 0);
__decorate([
    HasMany(() => EquipmentModel, 'type_id'),
    __metadata("design:type", Array)
], TypeModel.prototype, "equipments", void 0);
__decorate([
    CreatedAt,
    __metadata("design:type", Date)
], TypeModel.prototype, "created_at", void 0);
__decorate([
    UpdatedAt,
    __metadata("design:type", Date)
], TypeModel.prototype, "updated_at", void 0);
TypeModel = __decorate([
    Table({
        tableName: 'type',
        timestamps: true,
        underscored: true,
    })
], TypeModel);
export { TypeModel };
//# sourceMappingURL=type.model.js.map
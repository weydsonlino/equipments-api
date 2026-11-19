var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateEquipmentDto {
    model;
    type_id;
    parentEquipmentId;
}
__decorate([
    IsString({ message: 'O nome deve ser um string.' }),
    IsOptional(),
    __metadata("design:type", String)
], UpdateEquipmentDto.prototype, "model", void 0);
__decorate([
    IsString({ message: 'O ID do tipo deve ser um string.' }),
    IsUUID('7', { message: 'O ID do tipo deve ser um UUID válido.' }),
    IsOptional(),
    __metadata("design:type", String)
], UpdateEquipmentDto.prototype, "type_id", void 0);
__decorate([
    IsString({ message: 'O ID do equipamento pai deve ser um string.' }),
    IsUUID('7', { message: 'O ID do equipamento pai deve ser um UUID válido.' }),
    IsOptional(),
    __metadata("design:type", String)
], UpdateEquipmentDto.prototype, "parentEquipmentId", void 0);
//# sourceMappingURL=update-equipment.dto.js.map
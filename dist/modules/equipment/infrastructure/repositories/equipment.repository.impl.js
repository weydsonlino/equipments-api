var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EquipmentModel } from '../models/equipment.model.js';
import { EquipmentMapper } from '../mappers/equipment.mapper.js';
import { TypeModel } from '../../../type/infrastructure/model/type.model.js';
let EquipmentRepositoryImpl = class EquipmentRepositoryImpl {
    model;
    constructor(model) {
        this.model = model;
    }
    async delete(id) {
        await this.model.destroy({ where: { id } });
    }
    async update(id, model, typeId, parentEquipmentId) {
        const equipment = await this.model.findByPk(id, {
            include: [
                {
                    model: EquipmentModel,
                    as: 'parentEquipment',
                },
                {
                    model: TypeModel,
                    as: 'type',
                },
            ],
        });
        if (!equipment) {
            return null;
        }
        const values = {};
        if (model !== undefined)
            values.model = model;
        if (parentEquipmentId !== undefined) {
            values.parent_equipment_id = parentEquipmentId;
        }
        if (Object.keys(values).length > 0) {
            await equipment.update(values);
        }
        return EquipmentMapper.toEntity(equipment.dataValues);
    }
    async findById(id) {
        const equipment = await this.model.findByPk(id, {
            include: [
                {
                    model: EquipmentModel,
                    as: 'parentEquipment',
                },
                {
                    model: EquipmentModel,
                    as: 'components',
                },
                {
                    model: TypeModel,
                    as: 'type',
                },
            ],
        });
        return equipment ? EquipmentMapper.toEntity(equipment.dataValues) : null;
    }
    async findAll() {
        const equipment = await this.model.findAll({
            include: [
                {
                    model: EquipmentModel,
                    as: 'parentEquipment',
                },
                {
                    model: TypeModel,
                    as: 'type',
                },
            ],
        });
        return equipment.map((item) => EquipmentMapper.toEntity(item.dataValues));
    }
    async create(model, typeId, parentEquipmentId) {
        console.log(model, parentEquipmentId);
        const equipment = await this.model.create({
            model,
            type_id: typeId,
            parent_equipment_id: parentEquipmentId,
        });
        return EquipmentMapper.toEntity(equipment.dataValues);
    }
};
EquipmentRepositoryImpl = __decorate([
    Injectable(),
    __param(0, InjectModel(EquipmentModel)),
    __metadata("design:paramtypes", [Object])
], EquipmentRepositoryImpl);
export { EquipmentRepositoryImpl };
//# sourceMappingURL=equipment.repository.impl.js.map
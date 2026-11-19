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
import { TypeModel } from '../model/type.model.js';
import TypeMapper from '../mappers/type.mapper.js';
import { EquipmentModel } from '../../../equipment/infrastructure/models/equipment.model.js';
let TypeRepositoryImpl = class TypeRepositoryImpl {
    model;
    constructor(model) {
        this.model = model;
    }
    async findById(id) {
        const type = await this.model.findByPk(id, {
            include: [
                {
                    model: EquipmentModel,
                },
            ],
        });
        return type ? TypeMapper.toEntity(type) : null;
    }
    async findAll() {
        const types = await this.model.findAll({
            include: [
                {
                    model: EquipmentModel,
                },
            ],
        });
        return types.map((type) => TypeMapper.toEntity(type));
    }
    async create(name) {
        const type = await this.model.create({ name });
        return TypeMapper.toEntity(type);
    }
    async update(id, name) {
        const [, updatedTypes] = await this.model.update({ name }, { where: { id }, returning: true });
        return TypeMapper.toEntity(updatedTypes[0].dataValues);
    }
    async delete(id) {
        await this.model.destroy({ where: { id } });
        return;
    }
};
TypeRepositoryImpl = __decorate([
    Injectable(),
    __param(0, InjectModel(TypeModel)),
    __metadata("design:paramtypes", [Object])
], TypeRepositoryImpl);
export default TypeRepositoryImpl;
//# sourceMappingURL=type.repository.impl.js.map
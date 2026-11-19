import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
import { EquipmentModel } from '../models/equipment.model.js';
import { EquipmentEntity } from '../../domain/entities/equipment.entity.js';
export declare class EquipmentRepositoryImpl implements EquipmentRepository {
    private model;
    constructor(model: typeof EquipmentModel);
    delete(id: string): Promise<void>;
    update(id: string, model?: string, typeId?: string, parentEquipmentId?: string): Promise<EquipmentEntity | null>;
    findById(id: string): Promise<EquipmentEntity | null>;
    findAll(): Promise<EquipmentEntity[]>;
    create(model: string, typeId: string, parentEquipmentId?: string): Promise<EquipmentEntity>;
}

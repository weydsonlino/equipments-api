import { EquipmentEntity } from '../entities/equipment.entity.js';
export declare abstract class EquipmentRepository {
    abstract create(model: string, typeId: string, parentEquipmentId?: string): Promise<EquipmentEntity>;
    abstract findAll(): Promise<EquipmentEntity[]>;
    abstract findById(id: string): Promise<EquipmentEntity | null>;
    abstract update(id: string, model?: string, typeId?: string, parentEquipmentId?: string): Promise<EquipmentEntity | null>;
    abstract delete(id: string): Promise<void>;
}

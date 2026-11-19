import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
export declare class UpdateEquipmentUseCase {
    private readonly equipmentRepository;
    private readonly logger;
    constructor(equipmentRepository: EquipmentRepository);
    execute(id: string, data: {
        model?: string;
        parentEquipmentId?: string;
    }): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity | null>;
}

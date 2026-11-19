import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
export declare class GetOneEquipmentUseCase {
    private readonly equipmentRepository;
    private readonly logger;
    constructor(equipmentRepository: EquipmentRepository);
    execute(id: string): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity | null>;
}

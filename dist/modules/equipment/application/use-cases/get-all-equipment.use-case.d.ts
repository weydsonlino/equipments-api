import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
export declare class GetAllEquipmentsUseCase {
    private readonly equipmentRepository;
    private readonly logger;
    constructor(equipmentRepository: EquipmentRepository);
    execute(): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity[]>;
}

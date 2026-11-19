import { RegisterEquipmentDto } from '../dto/register-equipment.dto.js';
import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
export declare class RegisterEquipmentUsecase {
    private readonly registerEquimentRepository;
    private readonly logger;
    constructor(registerEquimentRepository: EquipmentRepository);
    execute(data: RegisterEquipmentDto): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity>;
}

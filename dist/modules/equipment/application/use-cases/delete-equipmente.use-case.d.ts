import { EquipmentRepository } from '../../domain/repositories/equipment-repository.repository.js';
export default class DeleteEquipmentUseCase {
    private readonly equipmentRepository;
    private readonly logger;
    constructor(equipmentRepository: EquipmentRepository);
    execute(id: string): Promise<{
        statusCode: number;
        message: string;
    } | undefined>;
}

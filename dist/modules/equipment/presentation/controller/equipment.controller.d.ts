import { RegisterEquipmentUsecase } from '../../application/use-cases/register-equipment.use-case.js';
import { RegisterEquipmentDto } from '../../application/dto/register-equipment.dto.js';
import { GetAllEquipmentsUseCase } from '../../application/use-cases/get-all-equipment.use-case.js';
import { GetOneEquipmentUseCase } from '../../application/use-cases/get-one-equipment.use-case.js';
import { UpdateEquipmentDto } from '../../application/dto/update-equipment.dto.js';
import { UpdateEquipmentUseCase } from '../../application/use-cases/update-equipment.use-case.js';
import DeleteEquipmentUseCase from '../../application/use-cases/delete-equipmente.use-case.js';
export declare class EquipmentController {
    private readonly registerEquipmentUseCase;
    private readonly getAllEquipmentsUseCase;
    private readonly getOneEquipmentUseCase;
    private readonly updateEquipmentUseCase;
    private readonly deleteEquipmentUseCase;
    constructor(registerEquipmentUseCase: RegisterEquipmentUsecase, getAllEquipmentsUseCase: GetAllEquipmentsUseCase, getOneEquipmentUseCase: GetOneEquipmentUseCase, updateEquipmentUseCase: UpdateEquipmentUseCase, deleteEquipmentUseCase: DeleteEquipmentUseCase);
    register(registerEquipmentDto: RegisterEquipmentDto): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity>;
    getAll(): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity[]>;
    getOne(id: string): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity | null>;
    update(id: string, updateEquipmentDto: UpdateEquipmentDto): Promise<import("../../domain/entities/equipment.entity.js").EquipmentEntity | null>;
    delete(id: string): Promise<{
        statusCode: number;
        message: string;
    } | undefined>;
}

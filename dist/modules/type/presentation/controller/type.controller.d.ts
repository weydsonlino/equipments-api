import { RegisterTypeDto } from '../../application/dto/register-type.dto.js';
import RegisterTypeUseCase from '../../application/use-cases/register-type.use-case.js';
import GetAllTypesUseCase from '../../application/use-cases/get-all-types.use-case.js';
import GetTypeUseCase from '../../application/use-cases/get-type.use-case.js';
import UpdateTypeUseCase from '../../application/use-cases/update-type.use-case.js';
import DeleteTypeUseCase from '../../application/use-cases/delete-type.use-case.js';
import UpdateTypeDto from '../../application/dto/update-type.dto.js';
export default class TypeController {
    private readonly registerTypeUseCase;
    private readonly getAllTypesUseCase;
    private readonly getTypeUseCase;
    private readonly updateTypeUseCase;
    private readonly deleteTypeUseCase;
    constructor(registerTypeUseCase: RegisterTypeUseCase, getAllTypesUseCase: GetAllTypesUseCase, getTypeUseCase: GetTypeUseCase, updateTypeUseCase: UpdateTypeUseCase, deleteTypeUseCase: DeleteTypeUseCase);
    registerType(registerTypeDto: RegisterTypeDto): Promise<import("../../domain/entities/type.entity.js").default>;
    getTypeById(id: string): Promise<import("../../domain/entities/type.entity.js").default | null>;
    getAllTypes(): Promise<import("../../domain/entities/type.entity.js").default[]>;
    updateType(id: string, updateTypeDto: UpdateTypeDto): Promise<import("../../domain/entities/type.entity.js").default | null>;
    deleteType(id: string): Promise<void>;
}

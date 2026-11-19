import TypeRepository from '../../domain/repositories/type.repository.js';
import TypeEntity from '../../domain/entities/type.entity.js';
import UpdateTypeDto from '../dto/update-type.dto.js';
export default class UpdateTypeUseCase {
    private readonly repository;
    private readonly logger;
    constructor(repository: TypeRepository);
    execute(id: string, data: UpdateTypeDto): Promise<TypeEntity | null>;
}

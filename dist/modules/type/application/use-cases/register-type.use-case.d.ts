import TypeRepository from '../../domain/repositories/type.repository.js';
import { RegisterTypeDto } from '../dto/register-type.dto.js';
import TypeEntity from '../../domain/entities/type.entity.js';
export default class RegisterTypeUseCase {
    private readonly typeRepository;
    private readonly logger;
    constructor(typeRepository: TypeRepository);
    execute(data: RegisterTypeDto): Promise<TypeEntity>;
}

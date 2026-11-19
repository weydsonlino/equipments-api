import TypeRepository from '../../domain/repositories/type.repository.js';
export default class GetAllTypesUseCase {
    private readonly typeRepository;
    private readonly logger;
    constructor(typeRepository: TypeRepository);
    execute(): Promise<import("../../domain/entities/type.entity.js").default[]>;
}

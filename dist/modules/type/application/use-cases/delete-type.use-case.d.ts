import TypeRepository from '../../domain/repositories/type.repository.js';
export default class DeleteTypeUseCase {
    private readonly typeRepository;
    private readonly logger;
    constructor(typeRepository: TypeRepository);
    execute(id: string): Promise<void>;
}

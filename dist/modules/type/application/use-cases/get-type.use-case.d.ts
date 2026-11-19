import TypeRepository from '../../domain/repositories/type.repository.js';
export default class GetTypeUseCase {
    private readonly repository;
    private readonly logger;
    constructor(repository: TypeRepository);
    execute(id: string): Promise<import("../../domain/entities/type.entity.js").default | null>;
}

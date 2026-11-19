import TypeEntity from '../../domain/entities/type.entity.js';
import TypeRepository from '../../domain/repositories/type.repository.js';
import { TypeModel } from '../model/type.model.js';
export default class TypeRepositoryImpl implements TypeRepository {
    private model;
    constructor(model: typeof TypeModel);
    findById(id: string): Promise<TypeEntity | null>;
    findAll(): Promise<TypeEntity[]>;
    create(name: string): Promise<TypeEntity>;
    update(id: string, name?: string): Promise<TypeEntity>;
    delete(id: string): Promise<void>;
}

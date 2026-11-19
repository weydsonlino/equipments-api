import TypeEntity from '../entities/type.entity.js';
export default abstract class TypeRepository {
    abstract findById(id: string): Promise<TypeEntity | null>;
    abstract findAll(): Promise<TypeEntity[]>;
    abstract create(name: string): Promise<TypeEntity>;
    abstract update(id: string, name?: string): Promise<TypeEntity>;
    abstract delete(id: string): Promise<void>;
}

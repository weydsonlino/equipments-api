import TypeEntity from '../../domain/entities/type.entity.js';
import { TypeModel } from '../model/type.model.js';
export default class TypeMapper {
    static toEntity(model: TypeModel): TypeEntity;
}

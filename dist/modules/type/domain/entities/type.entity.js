export default class TypeEntity {
    id;
    name;
    Equipment;
    constructor(id, name, Equipment = []) {
        this.id = id;
        this.name = name;
        this.Equipment = Equipment;
    }
    toJSON() {
        return {
            ...this,
            Equipment: this.Equipment !== null ? this.Equipment : undefined,
        };
    }
}
//# sourceMappingURL=type.entity.js.map
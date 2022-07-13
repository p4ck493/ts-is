export declare enum TypeOfValueEnum {
    object = "object"
}
declare class CompareMethod {
    /**
     *
     * @method Compare
     * @param objectOne is generic type
     * @param objectTwo is generic type
     */
    static method<T>(objectOne: T, objectTwo: T): boolean;
}
export default CompareMethod;

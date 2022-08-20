export declare enum TypeOfValueEnum {
    object = "object"
}
/**
 *
 * @method compare
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
declare function CompareMethod<T>(objectOne: T, objectTwo: T): boolean;
export default CompareMethod;

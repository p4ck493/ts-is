/**
 *
 * @method Instanceof
 * @param argument object
 * @param classRef link to model
 */
declare class InstanceofMethod {
    /**
     *
     * @param argument
     * @param classRef TODO array of classRef
     */
    static method<T>(argument: unknown, classRef: new () => T): argument is T;
}
export default InstanceofMethod;

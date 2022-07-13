/**
 *
 * @method Undefined
 * @example
 * Is.Undefined()
 * Is.Not.Undefined()
 * Is.All.Undefined()
 * Is.All.Not.Undefined()
 */
declare class UndefinedMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is undefined;
}
export default UndefinedMethod;

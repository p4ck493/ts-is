/**
 *
 * @method Null
 * @example
 * Is.Null()
 * Is.Not.Null()
 * Is.All.Null()
 * Is.All.Not.Null()
 */
declare class NullMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is null;
}
export default NullMethod;

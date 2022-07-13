/**
 *
 * @method Falsy
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
declare class FalsyMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is false;
}
export default FalsyMethod;

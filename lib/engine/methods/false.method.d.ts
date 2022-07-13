/**
 *
 * @method False
 * @example
 * Is.False()
 * Is.Not.False()
 * Is.All.False()
 * Is.All.Not.False()
 */
declare class FalseMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is false;
}
export default FalseMethod;

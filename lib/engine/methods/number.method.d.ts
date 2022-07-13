/**
 *
 * @method Number
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
declare class NumberMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is number;
}
export default NumberMethod;

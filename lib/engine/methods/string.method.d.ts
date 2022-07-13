/**
 *
 * @method String
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */
declare class StringMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is string;
}
export default StringMethod;

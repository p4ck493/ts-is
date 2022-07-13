/**
 *
 * @method True
 * @example
 * Is.True()
 * Is.Not.True()
 * Is.All.True()
 * Is.All.Not.True()
 */
declare class TrueMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is true;
}
export default TrueMethod;

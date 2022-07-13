/**
 *
 *
 * @method Truthy
 * @example
 * Is.Truthy()
 * Is.Not.Truthy()
 * Is.All.Truthy()
 * Is.All.Not.Truthy()
 */
declare class TruthyMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is true;
}
export default TruthyMethod;

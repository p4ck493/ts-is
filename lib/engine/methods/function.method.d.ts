/**
 *
 * @method Function
 * @example
 * Is.Function()
 * Is.Not.Function()
 * Is.All.Function()
 * Is.All.Not.Function()
 *
 * // With generic
 * Is.Function<PersonModel>()
 * Is.Not.Function<PersonModel>()
 * Is.All.Function<PersonModel>()
 * Is.All.Not.Function<PersonModel>()
 */
declare class FunctionMethod {
    /**
     *
     * @param argument
     */
    static method<T extends () => void>(argument: unknown): argument is T;
}
export default FunctionMethod;

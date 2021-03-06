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
function FunctionMethod<T extends () => void>(argument: unknown): argument is T {
    return {}.toString.call(argument) === '[object Function]';
}

export default FunctionMethod;

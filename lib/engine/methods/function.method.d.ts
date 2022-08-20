/**
 *
 * @method function
 * @example
 * is.function()
 * is.not.function()
 * is.all.function()
 * is.all.not.function()
 *
 * // With generic
 * is.function<PersonModel>()
 * is.not.function<PersonModel>()
 * is.all.function<PersonModel>()
 * is.all.not.function<PersonModel>()
 */
declare function FunctionMethod<T extends () => void>(argument: unknown): argument is T;
export default FunctionMethod;

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
function FunctionMethod(argument) {
    return {}.toString.call(argument) === '[object Function]';
}
export default FunctionMethod;

/**
 *
 * @method boolean
 * @example
 * is.boolean()
 * is.not.boolean()
 * is.all.boolean()
 * is.all.not.boolean()
 */
function BooleanMethod(argument) {
    return typeof argument === 'boolean';
}
export default BooleanMethod;

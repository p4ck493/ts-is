/**
 *
 * @method boolean
 * @example
 * is.boolean()
 * is.not.boolean()
 * is.all.boolean()
 * is.all.not.boolean()
 */
function BooleanMethod(argument: unknown): argument is boolean {
  return typeof argument === 'boolean';
}

export default BooleanMethod;

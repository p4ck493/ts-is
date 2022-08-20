/**
 *
 * @method string
 * @example
 * is.string()
 * is.not.string()
 * is.all.string()
 * is.all.not.string()
 */

function StringMethod(argument: unknown): argument is string {
  return typeof argument === 'string';
}

export default StringMethod;

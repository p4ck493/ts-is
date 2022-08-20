/**
 *
 * @method string
 * @example
 * is.string()
 * is.not.string()
 * is.all.string()
 * is.all.not.string()
 */
declare function StringMethod(argument: unknown): argument is string;
export default StringMethod;

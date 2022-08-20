/**
 *
 * @method null
 * @example
 * is.null()
 * is.not.null()
 * is.all.null()
 * is.all.not.null()
 */
function NullMethod(argument: unknown): argument is null {
  return argument === null;
}

export default NullMethod;

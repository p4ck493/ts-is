/**
 *
 * @method undefined
 * @example
 * is.undefined()
 * is.not.undefined()
 * is.all.undefined()
 * is.all.not.undefined()
 */
function UndefinedMethod(argument: unknown): argument is undefined {
  return argument === undefined;
}

export default UndefinedMethod;

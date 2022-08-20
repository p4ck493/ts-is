/**
 *
 * @method false
 * @example
 * is.false()
 * is.not.false()
 * is.all.false()
 * is.all.not.false()
 */
function FalseMethod(argument: unknown): argument is false {
  return argument === false;
}

export default FalseMethod;

/**
 *
 * @method true
 * @example
 * is.true()
 * is.not.true()
 * is.all.true()
 * is.all.not.true()
 */
function TrueMethod(argument: unknown): argument is true {
  return argument === true;
}

export default TrueMethod;

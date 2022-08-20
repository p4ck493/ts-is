/**
 *
 * @method falsy
 * @example
 * is.falsy()
 * is.not.falsy()
 * is.all.falsy()
 * is.all.not.falsy()
 */
function FalsyMethod(argument: unknown): argument is false {
  return !argument;
}

export default FalsyMethod;

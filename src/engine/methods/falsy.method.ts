/**
 *
 * @method Falsy
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
function FalsyMethod(argument: unknown): argument is false {
  return !argument;
}

export default FalsyMethod;

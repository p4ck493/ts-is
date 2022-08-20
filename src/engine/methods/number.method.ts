/**
 *
 * @method number
 * @example
 * is.number()
 * is.not.number()
 * is.all.number()
 * is.all.not.number()
 */
function NumberMethod(argument: unknown): argument is number {
  return typeof argument === 'number' && !isNaN(argument);
}

export default NumberMethod;

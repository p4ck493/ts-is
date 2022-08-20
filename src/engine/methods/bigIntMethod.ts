/**
 *
 * @method bigint
 * @example
 * is.bigint()
 * is.not.bigint()
 * is.all.bigint()
 * is.all.not.bigint()
 */
function BigIntMethod(argument: unknown): argument is BigInteger {
  return typeof argument === 'bigint';
}

export default BigIntMethod;

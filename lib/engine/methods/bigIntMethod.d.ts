/**
 *
 * @method bigint
 * @example
 * is.bigint()
 * is.not.bigint()
 * is.all.bigint()
 * is.all.not.bigint()
 */
declare function BigIntMethod(argument: unknown): argument is BigInteger;
export default BigIntMethod;

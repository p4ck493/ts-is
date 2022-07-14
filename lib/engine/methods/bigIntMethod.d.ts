/**
 *
 * @method Bigint
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
declare function BigIntMethod(argument: unknown): argument is BigInteger;
export default BigIntMethod;

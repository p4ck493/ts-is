/**
 *
 * @method Bigint
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
function BigIntMethod(argument: unknown): argument is BigInteger {
    return typeof argument === 'bigint';
}

export default BigIntMethod;

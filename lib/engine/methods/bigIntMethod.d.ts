/**
 *
 * @method Bigint
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
declare class BigIntMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is BigInteger;
}
export default BigIntMethod;

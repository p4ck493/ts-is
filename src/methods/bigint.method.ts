/**
 *
 * @param argument is any type
 */
export function BigintMethod(argument: unknown): argument is BigInteger {
  return typeof argument === 'bigint';
}

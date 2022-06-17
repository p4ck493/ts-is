/**
 *
 * @param argument is any type
 */
export function BigintMethod(argument: any): argument is BigInteger {
  return typeof argument === 'bigint';
}

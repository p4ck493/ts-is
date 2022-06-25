/**
 *
 * @param {unknown} argument
 * @returns {boolean}
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
export function BigintMethod(argument: unknown): argument is BigInteger {
  return typeof argument === 'bigint';
}

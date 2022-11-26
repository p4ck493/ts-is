export function BigIntMethod(argument: unknown): argument is BigInteger {
  return typeof argument === 'bigint';
}

export function BigIntMethod(argument: unknown): argument is bigint {
  return typeof argument === 'bigint';
}

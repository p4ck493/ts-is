/**
 *
 * @param argument is any type
 */
export function NumberMethod(argument: unknown): argument is number {
  return typeof argument === 'number' && !isNaN(argument);
}

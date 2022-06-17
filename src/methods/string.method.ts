/**
 *
 * @param argument is any type
 */
export function StringMethod(argument: unknown): argument is string {
  return typeof argument === 'string';
}

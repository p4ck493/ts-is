/**
 *
 * @param argument is any type
 */
export function StringMethod(argument: any): argument is string {
  return typeof argument === 'string';
}

/**
 *
 * @param argument is any type
 */
export function BooleanMethod(argument: any): argument is boolean {
  return typeof argument === 'boolean';
}

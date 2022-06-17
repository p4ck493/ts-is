/**
 *
 * @param argument is any type
 */
export function NumberMethod(argument: any): argument is number {
  return typeof argument === 'number' && !isNaN(argument);
}

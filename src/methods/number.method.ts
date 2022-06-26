/**
 *
 * @method Number
 * @param {unknown} argument
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
export function NumberMethod(argument: unknown): argument is number {
  return typeof argument === 'number' && !isNaN(argument);
}

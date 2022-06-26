/**
 *
 * @method String
 * @param {unknown} argument
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */
export function StringMethod(argument: unknown): argument is string {
  return typeof argument === 'string';
}

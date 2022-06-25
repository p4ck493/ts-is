/**
 *
 * @method Boolean
 * @param {unknown} argument
 * @returns {boolean}
 * @example
 * Is.Boolean()
 * Is.Not.Boolean()
 * Is.All.Boolean()
 * Is.All.Not.Boolean()
 */
export function BooleanMethod(argument: unknown): argument is boolean {
  return typeof argument === 'boolean';
}

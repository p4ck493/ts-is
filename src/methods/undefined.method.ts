/**
 *
 * @method Undefined
 * @param {unknown} argument
 * @example
 * Is.Undefined()
 * Is.Not.Undefined()
 * Is.All.Undefined()
 * Is.All.Not.Undefined()
 */
export function UndefinedMethod(argument: unknown): argument is undefined {
  return argument === undefined;
}

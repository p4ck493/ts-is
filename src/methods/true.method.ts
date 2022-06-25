/**
 *
 * @param {unknown} argument
 * @example
 * Is.True()
 * Is.Not.True()
 * Is.All.True()
 * Is.All.Not.True()
 */
export function TrueMethod(argument: unknown): argument is true {
  return argument === true;
}

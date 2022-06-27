/**
 *
 * @method Null
 * @example
 * Is.Null()
 * Is.Not.Null()
 * Is.All.Null()
 * Is.All.Not.Null()
 */
export function NullMethod(argument: unknown): argument is null {
  return argument === null;
}

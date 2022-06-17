/**
 *
 * @param argument is any type
 */
export function NullMethod(argument: unknown): argument is null {
  return argument === null;
}

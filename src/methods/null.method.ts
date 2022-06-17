/**
 *
 * @param argument is any type
 */
export function NullMethod(argument: any): argument is null {
  return argument === null;
}

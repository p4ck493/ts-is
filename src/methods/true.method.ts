/**
 *
 * @param argument is boolean type
 */
export function TrueMethod(argument: unknown): argument is true {
  return argument === true;
}

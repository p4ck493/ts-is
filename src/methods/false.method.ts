/**
 *
 * @param argument is boolean type
 */
export function FalseMethod(argument: unknown): argument is false {
  return argument === false;
}

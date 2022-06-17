/**
 *
 * @param argument is boolean type
 */
export function FalseMethod(argument: boolean): argument is false {
  return argument === false;
}

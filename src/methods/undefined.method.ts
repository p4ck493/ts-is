/**
 *
 * @param argument is any type
 */
export function UndefinedMethod(argument: any): argument is undefined {
  return argument === undefined;
}

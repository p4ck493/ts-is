/**
 *
 * @param argument is any type
 */
export function UndefinedMethod(argument: unknown): argument is undefined {
  return argument === undefined;
}

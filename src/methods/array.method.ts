/**
 * Collection is an Array
 * @param argument is any type
 */
export function ArrayMethod<T>(argument: unknown): argument is Array<T> {
  return argument instanceof Array;
}

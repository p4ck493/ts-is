/**
 * Collection is an Array
 * @param argument is any type
 */
export function ArrayMethod(argument: any): argument is any[] {
  return Array?.isArray ? Array.isArray(argument) : argument instanceof Array;
}

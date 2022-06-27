import { FunctionMethod } from './function.method';

/**
 *
 *
 * @method Array
 *
 * @example
 * @RegisterInIs
 * class Person {
 *
 * }
 *
 * Is.Person.Array([new Person()]) // Returns true
 * Is.Person.Array([new Address()]) // Returns false
 * Is.Array([new Address()]) // Returns true
 * Is.Array([]) // Returns true
 * Is.Not.Array([]) // Returns false
 * Is.Not.Array(0) // Returns true
 * Is.Not.Array(true) // Returns true
 * Is.Not.Array('Hello world') // Returns true
 *
 * // Special cases:
 *
 * // Case #1
 * const arr: Person[] = [];
 * Is.Person.Array(arr) // Returns false because it is an empty array, but for: Is.Array(arr) returns true!
 *
 * // Case #2
 * Is.Not.Person.Array(arr) // Returns true
 */
export function ArrayMethod<T>(argument: unknown, classRef?: new () => T): argument is Array<T> {
  if (argument instanceof Array) {
    if (FunctionMethod(classRef)) {
      if (argument.length) {
        return argument.every((item: T) => item instanceof classRef);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  return false;
}

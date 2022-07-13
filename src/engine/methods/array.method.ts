import {RegisterInIs} from '../../decorators';
import FunctionMethod from './function.method';

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
 *
 */

@RegisterInIs({
    className: 'array',
    customMethod: 'method'
})
class ArrayMethod {
    /**
     *
     * @param argument
     * @param classRef TODO change argument "classRef" to array of function: [PersonModel, Symbol, Boolean, Number, ...]
     */
    public static method<T>(argument: unknown, classRef?: new () => T): argument is Array<T> {
        const context: ArrayMethod = this; // TODO ContextMethodInterface
        // console.log(context);

        if (argument instanceof Array) {
            if (FunctionMethod.method(classRef)) {
                if (argument.length) {
                    return argument.every((item: T) => item instanceof classRef);
                } else {
                    return false;
                }
            }
            return true;
        }

        return false;
    }
}

export default ArrayMethod;

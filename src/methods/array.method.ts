/**
 *
 * Is.Person.Array([new Person()]) // Return true
 * Is.Person.Array([new Address()]) // Return false
 *
 * Collection is an Array
 * @param argument is any type
 * @param classRef
 */
import {Is} from '../index';

export function ArrayMethod<T>(argument: unknown, classRef?: new () => T): argument is Array<T> {

    if (argument instanceof Array) {

        if (argument.length && Is.Function(classRef)) {

            return argument.every((item: T) => item instanceof classRef);

        }

        return true;

    }

    return false;

}

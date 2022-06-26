import {ArrayMethod} from './array.method';
import {NullMethod} from './null.method';

/**
 *
 * @method Object
 * @param {unknown} argument
 * @example
 * Is.Object()
 * Is.Not.Object()
 * Is.All.Object()
 * Is.All.Not.Object()
 *
 * // Or with generic
 * Is.Object<PersonModel>()
 * Is.Not.Object<PersonModel>()
 * Is.All.Object<PersonModel>()
 * Is.All.Not.Object<PersonModel>()
 */
export function ObjectMethod<T extends object>(argument: unknown): argument is T {
  return typeof argument === 'object' && !ArrayMethod(argument) && !NullMethod(argument);
}

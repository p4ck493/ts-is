import {Is} from '../index';

/**
 * ObjectMethod is an Object
 * @param argument is any type
 */
export function ObjectMethod(argument: unknown): argument is object {
  return typeof argument === 'object' && Is.Not.Array(argument) && Is.Not.Null(argument);
}

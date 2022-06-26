import {NullMethod} from './null.method';
import {UndefinedMethod} from './undefined.method';

/**
 *
 * @method NulOrUndefined
 * @param {unknown} argument
 * @example
 * Is.NullOrUndefined()
 * Is.Not.NullOrUndefined()
 * Is.All.NullOrUndefined()
 * Is.All.Not.NullOrUndefined()
 */
export function NullOrUndefinedMethod(argument: unknown): boolean {
    return NullMethod(argument) || UndefinedMethod(argument);
}

import {FalsyMethod} from './falsy.method';

/**
 *
 * @param argument is boolean type
 */
export function TruthMethod(argument: unknown): argument is true {
    return !FalsyMethod(argument);
}

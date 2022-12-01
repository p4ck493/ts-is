import {FalsyMethod} from './falsy.method';

export function TruthyMethod(argument: unknown): argument is true {
    return !FalsyMethod(argument);
}

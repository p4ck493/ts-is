import {StringMethod} from './string.method';

export function WordMethod(argument: string): argument is string {
    if (StringMethod(argument)) {
        return /^[a-zA-Z]+$/.test(argument);
    }
    return false;
}


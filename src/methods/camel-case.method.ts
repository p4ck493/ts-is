import {isConfig} from '../config';
import {StringMethod} from './string.method';

export function CamelCaseMethod(argument: unknown): argument is string {
    if (StringMethod(argument)) {
        return isConfig.regex.camelCase.test(argument);
    }
    return false;
}

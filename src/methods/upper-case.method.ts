import {isConfig} from '../config';
import {StringMethod} from './string.method';

export function UpperCaseMethod(argument: unknown): argument is string {
    if (StringMethod(argument)) {
        return !isConfig.regex.upperCase.test(argument);
    }
    return false;
}

import {isConfig} from '../config';
import {StringMethod} from './string.method';

export function KebabCaseMethod(argument: unknown): argument is string {
    if (StringMethod(argument)) {
        return isConfig.regex.kebabCase.test(argument);
    }
    return false;
}

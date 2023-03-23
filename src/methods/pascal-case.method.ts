import {isConfig} from '../config';
import {StringMethod} from './string.method';

export function PascalCaseMethod(argument: unknown): argument is string {
    if (StringMethod(argument)) {
        return isConfig.regex.pascalCase.test(argument);
    }
    return false;
}

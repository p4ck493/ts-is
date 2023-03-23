import {isConfig} from '../config';
import {StringMethod} from './string.method';

export function SnakeCaseMethod(argument: unknown): argument is string {
    if (StringMethod(argument)) {
        return isConfig.regex.snakeCase.test(argument);
    }
    return false;
}

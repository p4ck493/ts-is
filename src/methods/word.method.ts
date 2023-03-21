import { StringMethod } from './string.method';
import { isConfig } from '../config';

export function WordMethod(argument: string): argument is string {
  if (StringMethod(argument)) {
    return isConfig.regex.word.test(argument);
  }
  return false;
}

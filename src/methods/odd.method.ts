import {NumberMethod} from './number.method';

export function OddMethod(argument: unknown): argument is number {
  return NumberMethod(argument) && (argument % 2 === 1 || argument % 2 === -1);
}

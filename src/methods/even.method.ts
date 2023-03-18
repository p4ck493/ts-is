import {NumberMethod} from './number.method';

export function EvenMethod(argument: unknown): argument is number {
  return NumberMethod(argument) && argument % 2 === 0;
}

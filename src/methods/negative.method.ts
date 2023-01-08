import {NumberMethod} from './number.method';

export function NegativeMethod(argument: unknown): argument is number {
  return NumberMethod(argument) && argument < 0;
}

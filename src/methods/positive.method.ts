import {NumberMethod} from './number.method';

export function PositiveMethod(argument: unknown): argument is number {
  return NumberMethod(argument) && argument > 0;
}

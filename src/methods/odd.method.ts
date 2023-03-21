import { NumberMethod } from './number.method';
import { BigIntMethod } from './bigInt.method';

export function OddMethod(argument: unknown): argument is number {
  if (NumberMethod(argument)) {
    return argument % 2 === 1 || argument % 2 === -1;
  } else if (BigIntMethod(argument)) {
    return argument % BigInt(2) === BigInt(1) || argument % BigInt(2) === BigInt(-1);
  }
  return false;
}

import {NullOrUndefinedMethod} from './null-or-undefined.method';
import {BooleanMethod} from './boolean.method';
import {NumberMethod} from './number.method';
import {BigintMethod} from './bigint.method';
import {FunctionMethod} from './function.method';

/**
 * Empty is: '', null, undefined, {}, NaN, Symbol(), [].
 * @param argument is any type
 */
export function EmptyMethod(argument: unknown): boolean {
  // if is null or undefined is empty
  if (NullOrUndefinedMethod(argument)) {
    return true;
  }

  // If argument is boolean when is not empty
  if (BooleanMethod(argument)) {
    return false;
  }

  // If argument is number when is not empty
  if (NumberMethod(argument)) {
    return false;
  }

  // If argument is BigInt when is not empty
  if (BigintMethod(argument)) {
    return false;
  }

  // If argument is Function when is not empty
  if (FunctionMethod(argument)) {
    return false;
  }

  return Object.keys(argument as object)?.length === 0;
}

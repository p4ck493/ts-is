/**
 *
 * @param argument is any type
 */
import { NullMethod } from './null.method';
import { UndefinedMethod } from './undefined.method';

export function NullOrUndefinedMethod(argument: any): boolean {
  return NullMethod(argument) || UndefinedMethod(argument);
}

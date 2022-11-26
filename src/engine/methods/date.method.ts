import { methods } from './index';

export function DateMethod(argument: unknown): argument is Date {
  return methods.instanceof(argument, Date);
}

import {methods} from './index';

export function ReferenceErrorMethod(argument: unknown): argument is ReferenceError {
  return methods.instanceof(argument, ReferenceError);
}

import {methods} from './index';

export function TypeErrorMethod(argument: unknown): argument is TypeError {
  return methods.instanceof(argument, TypeError);
}

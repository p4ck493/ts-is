import {methods} from './index';

export function ObjectMethod<T extends object>(argument: unknown): argument is T {
  return typeof argument === 'object' && !methods.array(argument) && !methods.null(argument);
}

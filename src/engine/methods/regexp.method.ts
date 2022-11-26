import {methods} from './index';

export function RegExpMethod(argument: unknown): argument is RegExp {
  return methods.instanceof(argument, RegExp);
}

import {methods} from './index';

/**
 * @method error
 */
export function ErrorMethod(argument: unknown): argument is Error {
  return methods.instanceof(argument, Error);
}

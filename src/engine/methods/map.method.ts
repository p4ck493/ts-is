import {methods} from './index';

export function MapMethod<KEY = any, VALUE = any>(argument: unknown): argument is Map<KEY, VALUE> {
  return methods.instanceof(argument, Map);
}

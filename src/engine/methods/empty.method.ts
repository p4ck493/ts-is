import {methods} from './index';

export function EmptyMethod(argument: unknown): boolean {
  if (methods.string(argument) || methods.object(argument) || methods.array(argument)) {
    if (methods.map(argument)) {
      return argument.size === 0;
    }
    return Object.keys(argument as object)?.length === 0;
  }
  return false;
}

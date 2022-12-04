import { StringMethod } from './string.method';
import { ObjectMethod } from './object.method';
import { ArrayMethod } from './array.method';

export function EmptyMethod<T extends object>(argument: unknown): boolean {
  if (StringMethod(argument)) {
    return argument.trim()[0] === undefined;
  }

  if (ObjectMethod<T>(argument) || ArrayMethod<T>(argument)) {
    if (Reflect.has(argument, 'size')) {
      // @ts-ignore
      return argument.size <= 0;
    }
    for (const key in argument) {
      if (argument.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

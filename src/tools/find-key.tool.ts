import {CompareMethod} from '../methods/compare.method';

// TODO guard on arguments
export function findKey<T>(object: { [key: string]: T }, value: T): string | null {
  for (const key of Object.keys(object)) {
    if (CompareMethod<T>(object[key], value)) {
      return key;
    }
  }
  return null;
}

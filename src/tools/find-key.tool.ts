import {methods} from '../engine/methods/index';

// TODO guard on arguments
// TODO create another report for the method
export function findKey<T>(object: { [key: string]: T }, value: T): string | null {
  for (const key of Object.keys(object)) {
    if (methods.compare<T>(object[key], value)) {
      return key;
    }
  }
  return null;
}

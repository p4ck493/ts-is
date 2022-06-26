import {NullOrUndefinedMethod} from './null-or-undefined.method';
import {ArrayMethod} from './array.method';

export enum TypeOfValueEnum {
  object = 'object',
}

/**
 *
 * @method Compare
 * @param objectOne is generic type
 * @param objectTwo is generic type
 * @returns {boolean}
 */
export function CompareMethod<T>(objectOne: T, objectTwo: T): boolean {
  if (NullOrUndefinedMethod(objectOne) || NullOrUndefinedMethod(objectTwo)) {
    return false;
  }

  const keysOfObjectOne: string[] = Object.keys(objectOne) ?? [];
  const keysOfObjectTwo: string[] = Object.keys(objectTwo) ?? [];

  if (!ArrayMethod(keysOfObjectOne) || !ArrayMethod(keysOfObjectTwo)) {
    return false;
  }

  if (keysOfObjectOne.length !== keysOfObjectOne.length) {
    return false;
  }

  if (!keysOfObjectOne.length && !keysOfObjectTwo.length) {
    return true;
  }

  for (const keyOfObjectOne of keysOfObjectTwo) {
    switch (typeof (objectOne as any)[keyOfObjectOne]) {
      case TypeOfValueEnum.object:
        if (!CompareMethod((objectOne as any)[keyOfObjectOne], (objectTwo as any)[keyOfObjectOne])) {
          return false;
        }
        break;
      default:
        if ((objectOne as any)[keyOfObjectOne] !== (objectTwo as any)[keyOfObjectOne]) {
          return false;
        }
        break;
    }
  }

  return true;
}

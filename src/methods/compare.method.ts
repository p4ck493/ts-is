import {ArrayMethod} from './array.method';
import {Methods} from './index';

export enum TypeOfValueEnum {
  object = 'object',
}

/**
 *
 * @method Compare
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
export function CompareMethod<T>(objectOne: T, objectTwo: T): boolean {
  if (
    Methods.Null(objectOne) ||
    Methods.Undefined(objectOne) ||
    Methods.Null(objectTwo) ||
    Methods.Undefined(objectTwo)
  ) {
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

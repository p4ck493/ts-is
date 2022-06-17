import { NullOrUndefinedMethod } from './null-or-undefined.method';
import { Is } from '../index';

export enum TypeOfValueEnum {
  object = 'object',
}

/**
 *
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
export function CompareMethod<T>(objectOne: T, objectTwo: T): boolean {
  if (NullOrUndefinedMethod(objectOne) || NullOrUndefinedMethod(objectTwo)) {
    return false;
  }

  const keysOfObjectOne: string[] = Object.keys(objectOne) ?? [];
  const keysOfObjectTwo: string[] = Object.keys(objectTwo) ?? [];

  if (!keysOfObjectOne?.length || !keysOfObjectTwo?.length) {
    return false;
  }

  if (keysOfObjectOne.length !== keysOfObjectOne.length) {
    return false;
  }

  for (const keyOfObjectOne of keysOfObjectTwo) {
    switch (typeof (objectOne as any)[keyOfObjectOne]) {
      case TypeOfValueEnum.object:
        if (Is.Not.Compare((objectOne as any)[keyOfObjectOne], (objectTwo as any)[keyOfObjectOne])) {
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

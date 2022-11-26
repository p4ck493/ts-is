import { methods } from './index';

export enum TypeOfValueEnum {
  object = 'object',
}

export function CompareMethod<T>(objectOne: T, objectTwo: T): boolean {
  if (
    methods.null(objectOne) ||
    methods.undefined(objectOne) ||
    methods.null(objectTwo) ||
    methods.undefined(objectTwo)
  ) {
    return false;
  }

  const keysOfObjectOne: string[] = Object.keys(objectOne) ?? [];
  const keysOfObjectTwo: string[] = Object.keys(objectTwo) ?? [];

  if (!methods.array(keysOfObjectOne) || !methods.array(keysOfObjectTwo)) {
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

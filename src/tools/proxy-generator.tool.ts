// import {afterWrapperType, beforeWrapperType} from '../types/wrapper.type';
import {afterWrappers, beforeWrappers, typeWrappers} from '../wrappers';
import {afterWrapperType, beforeWrapperType, typeWrapperType} from '../types/wrapper.type';
// import {AfterWrappersInterface, BeforeWrappersInterface} from '../interfaces/wrappers.interface';

/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 * If found in the path "AfterWrappers" it pushed to queue of "AfterWrappers" and the same of "BeforeWrappers"
 * Examples: Is.All.Not.Boolean([true, false, [0]])
 * Explain: AfterWrappers[BeforeWrappers[[true, false, [0]]]]
 *
 * @param target must by an object
 * @param name must be a string
 * @param methodList must be array of methods
 * @param beforeWrapperList must be array of before wrappers
 * @param typeWrapperList must be array of type wrappers
 * @param afterWrapperList must be array of after wrappers
 */
const proxyRecursive = (
  // TODO interface
  target: any,
  name: string,
  methodList: any,
  beforeWrapperList: beforeWrapperType[],
  typeWrapperList: typeWrapperType[],
  afterWrapperList: afterWrapperType[],
): any => {

  let newTarget: object = methodList;

  const hasMethod: boolean = methodList.hasOwnProperty(name);

  if (hasMethod) {
    newTarget = methodList[name] ?? target;
  } else {

    const hasBeforeWrapper: boolean = beforeWrappers.hasOwnProperty(name);
    const hasTypeWrapper: boolean = typeWrappers.hasOwnProperty(name);
    const hasAfterWrapper: boolean = afterWrappers.hasOwnProperty(name);
    const registerOfWrappers: boolean[] = [hasBeforeWrapper, hasTypeWrapper, hasAfterWrapper];

    if (hasBeforeWrapper) {
      beforeWrapperList.push(beforeWrappers[name as keyof (typeof beforeWrappers)]);
    }

    if (hasTypeWrapper) {
      typeWrapperList.push(typeWrappers[name as keyof (typeof typeWrappers)]);
    }

    if (hasAfterWrapper) {
      afterWrapperList.push(afterWrappers[name as keyof (typeof afterWrappers)]);
    }

    if (registerOfWrappers.every(item => !item)) {
      throw new Error(`Not found propery with name: ${name}`);
    }
  }

  return new Proxy(newTarget, {
    get: (targetGet: any, nameGet: string) => {
      // TODO interface
      return proxyRecursive(targetGet[nameGet], nameGet, targetGet, beforeWrapperList, typeWrapperList, afterWrapperList);
    },
    apply: (targetApply: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]): boolean => {

      argumentList.push(...(typeWrapperList ?? []));
      let result;

      if (beforeWrapperList?.length) {
        // TODO reduce
        result = beforeWrapperList[0](targetApply, argumentList);
      } else {
        result = targetApply(...argumentList);
      }

      if (afterWrapperList?.length) {
        // TODO reduce
        result = afterWrapperList[0](result);
      }

      return result;
    },
  });
};

/**
 *
 * @param defaultFunction must be method
 * @param methodList must be array of methods
 */
export const proxyGenerator: any = (defaultFunction: object, methodList: unknown): any => {
  return new Proxy(defaultFunction, {
    get: (target: object, name: string) => {
      return proxyRecursive(target, name, methodList, [], [], []);
    },
    apply: (target: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]) => {
      return target(...argumentList);
    },
  });
};

import {afterWrappers, beforeWrappers, typeWrappers} from '../wrappers';
import {afterWrapperType, beforeWrapperType, typeWrapperType} from '../types/wrapper.type';

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
 * If need check array of some class, just register the class in typeWrappers, examples:
 *
 * Example #1
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * Object.assign(typeWrappers, {Person});
 *
 * // Later
 * Is.Person.Array([new Person(), true, 0]) // Return false
 * Is.Not.Person.Array([new Person(), true, 0]) // Return true
 * Is.Person.Array([new Person(), new Person()]) // Return true
 * Is.Person.Array([]) // Return true
 *
 * Example #2
 *
 * @RegisterInIs({ className: 'PersonModel' }) // Or @RegisterInIs() and then call later, as shown in example #1 above
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * // Later
 * Is.PersonModel.Array([new Person(), true, 0]) // Return false
 * Is.Not.PersonModel.Array([new Person(), true, 0]) // Return true
 * Is.PersonModel.Array([new Person(), new Person()]) // Return true
 * Is.PersonModel.Array([]) // Return true
 *
 *
 * @param target must by an object
 * @param name must be a string
 * @param methodList must be array of methods
 * @param beforeWrapperList must be array of before wrappers
 * @param typeWrapperList must be array of type wrappers
 * @param afterWrapperList must be array of after wrappers
 */
function proxyRecursive(
  target: object,
  name: string,
  methodList: object,
  beforeWrapperList: beforeWrapperType[],
  typeWrapperList: typeWrapperType[],
  afterWrapperList: afterWrapperType[],
): object {

  let newTarget: object = methodList;

  const hasMethod: boolean = methodList.hasOwnProperty(name);

  if (hasMethod) {
    newTarget = methodList[(name as keyof (typeof methodList))] ?? target;
  } else {

    const hasTypeWrapper: boolean = typeWrappers.hasOwnProperty(name);
    const hasBeforeWrapper: boolean = beforeWrappers.hasOwnProperty(name);
    const hasAfterWrapper: boolean = afterWrappers.hasOwnProperty(name);
    const notFoundWrapperInAnyWrappers: boolean[] = [hasTypeWrapper, hasBeforeWrapper, hasAfterWrapper];

    if (hasTypeWrapper) {
      typeWrapperList.push(typeWrappers[name as keyof (typeof typeWrappers)]);
    }

    if (hasBeforeWrapper) {
      beforeWrapperList.push(beforeWrappers[name as keyof (typeof beforeWrappers)]);
    }

    if (hasAfterWrapper) {
      afterWrapperList.push(afterWrappers[name as keyof (typeof afterWrappers)]);
    }

    if (notFoundWrapperInAnyWrappers.every((item: boolean) => !item)) {
      throw new Error(`Not found propery with name: ${name}`);
    } else {

    }
  }

  return new Proxy(newTarget, {
    get: (targetGet: any, nameGet: string): ReturnType<typeof proxyRecursive> => {
      return proxyRecursive(targetGet[nameGet], nameGet, targetGet, beforeWrapperList, typeWrapperList, afterWrapperList);
    },
    apply: (targetApply: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]): ReturnType<typeof targetApply> => {

      argumentList.push(...(typeWrapperList ?? []));
      let result;

      if (beforeWrapperList?.length) {
        result = beforeWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(targetApply, argumentList, previousValue)
        }, result);
      } else {
        result = targetApply(...argumentList);
      }

      if (afterWrapperList?.length) {
        result = afterWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue)
        }, result);
      }



      return result;
    },
  });
}

/**
 *
 * @param defaultFunction must be method
 * @param methodList must be array of methods
 */
export function proxyGenerator(defaultFunction: object, methodList: object): any {
  return new Proxy(defaultFunction, {
    get: (target: object, name: string): ReturnType<typeof proxyRecursive> => {
      return proxyRecursive(target, name, methodList, [], [], []);
    },
    apply: (target: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]): ReturnType<typeof target> => {
      return target(...argumentList);
    },
  });
}

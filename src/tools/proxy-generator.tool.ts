import {proxyRecursive} from './proxy-recursive.tool';
import {FlagsToolInterface} from '../interfaces/tools/flags.tool.interface';

// GET
type proxyGeneratorGetType = (target: object, name: string) => ReturnType<typeof proxyRecursive>;

function proxyGeneratorGet(): proxyGeneratorGetType {
  return (target, name) => {
    const flags: FlagsToolInterface = {
      AfterWrapper: false,
      BeforeWrapper: false,
      Method: false,
      ModelWrapper: false,
    };
    return proxyRecursive(target, name, flags, [], []);
  };
}

// APPLY

type proxyGeneratorApplyType = (
  target: (...arg: unknown[]) => boolean,
  thisArg: unknown,
  argumentList: unknown[],
) => ReturnType<typeof target>;

function proxyGeneratorApply(): proxyGeneratorApplyType {
  return (
    target: (...arg: unknown[]) => boolean,
    thisArg: unknown,
    argumentList: unknown[],
  ): ReturnType<typeof target> => {
    return target(...argumentList);
  };
}

/**
 *
 * @param defaultFunction must be method
 */
export function proxyGenerator(defaultFunction: object): any {
  return new Proxy(defaultFunction, {
    get: proxyGeneratorGet(),
    apply: proxyGeneratorApply(),
  });
}

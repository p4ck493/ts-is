import { proxyGeneratorGet } from './get.generator.proxy.engine';

/**
 *
 * @param defaultFunction must be method
 */
export function proxyGenerator(defaultFunction: object): any {
  return new Proxy(defaultFunction, {
    get: proxyGeneratorGet(),
    apply: (
      target: (...arg: unknown[]) => boolean,
      thisArg: unknown,
      argumentList: unknown[],
    ): ReturnType<typeof target> => {
      console.log(this, globalThis, target, thisArg, argumentList);
      return target(...argumentList);
    },
  });
}

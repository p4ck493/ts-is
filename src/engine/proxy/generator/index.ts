import { proxyGeneratorGet } from './get.generator.proxy.engine';
import { proxyGeneratorApply } from './apply.generator.proxy.engine';

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

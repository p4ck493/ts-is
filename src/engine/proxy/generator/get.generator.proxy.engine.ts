import {proxyRecursive} from '../recursive';

type proxyGeneratorGetType = (target: object, name: string) => ReturnType<typeof proxyRecursive>;

export function proxyGeneratorGet(): proxyGeneratorGetType {
  return (target, name) => {
    return proxyRecursive(0, target, name, {
      all: [],
      not: [],
      or: [],
      methods: [],
    });
  };
}

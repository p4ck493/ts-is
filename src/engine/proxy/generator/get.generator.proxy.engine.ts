import { proxyRecursive } from '../recursive';

type proxyGeneratorGetType = (target: object, name: string) => ReturnType<typeof proxyRecursive>;

export function proxyGeneratorGet(): proxyGeneratorGetType {
  return (target, name) => {
    return proxyRecursive(0, target, name, {
      lastCommandIsCall: false,
      lastCommandIsApply: false,
      all: [],
      not: [],
      or: [],
      methods: [],
    });
  };
}

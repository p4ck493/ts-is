import { registerInIsDecorator } from './decorators/register-in-is.decorator';
import { AllMethodsInterface } from './methods';
import { proxyGeneratorGet } from './proxy/generator/get.generator.proxy.engine';

export const RegisterInIs = registerInIsDecorator;

function defaultFunction(argument: unknown): unknown {
  // TODO return typeof argument or make something cool
  return argument;
}

export const is: AllMethodsInterface = new Proxy<any>(defaultFunction, {
  get: proxyGeneratorGet(),
  apply: (
    target: (...arg: unknown[]) => boolean,
    thisArg: unknown,
    argumentList: unknown[],
  ): ReturnType<typeof target> => {
    return target(...argumentList);
  },
});

import {proxyGenerator} from './engine/proxy/generator';
import {IsType} from './types/is.type';

import {registerInIsDecorator} from './decorators/register-in-is.decorator';

export const RegisterInIs = registerInIsDecorator;

function defaultFunction(argument: unknown): unknown {
  return argument;
}

export const is: IsType = proxyGenerator(defaultFunction);

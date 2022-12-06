import {proxyGenerator} from './engine/proxy/generator';
import {IsType} from './types/is.type';

import {registerInIsDecorator} from './decorators/register-in-is.decorator';

export const packageName = '@p4ck493/ts-is';

export const RegisterInIs = registerInIsDecorator;

function defaultFunction(argument: unknown): unknown {
  // TODO return typeof argument or make something cool
  return argument;
}

export const is: IsType = proxyGenerator(defaultFunction);

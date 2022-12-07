import {proxyGenerator} from './engine/proxy/generator';
import {registerInIsDecorator} from './decorators/register-in-is.decorator';
import {AllMethodsInterface} from './engine/methods';

export const RegisterInIs = registerInIsDecorator;

function defaultFunction(argument: unknown): unknown {
    // TODO return typeof argument or make something cool
    return argument;
}

export const is: AllMethodsInterface = proxyGenerator(defaultFunction);

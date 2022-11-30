import {proxyGenerator} from './engine/proxy/generator';
import {IsType} from './types/is.type';

function defaultFunction(argument: unknown): unknown {
    // TODO return typeof argument or make something cool
    return argument;
}

export const is: IsType = proxyGenerator(defaultFunction);

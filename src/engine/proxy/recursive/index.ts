import {methods} from '../../methods';
import {proxyRecursiveApply} from './apply.recursive.proxy.engine';
import {proxyRecursiveGet} from './get.recursive.proxy.engine';
import {ParamsProxyEngineInterface} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';

/**
 *
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param params ParamsProxyEngineInterface
 */
export function proxyRecursive(target: object, name: string, params: ParamsProxyEngineInterface): object {
    params.commandList.push(name);

    // TODO apply, call

    return new Proxy(getMethod(name), {
        get: proxyRecursiveGet(params),
        apply: proxyRecursiveApply(params),
    });
}

function getMethod(name: string): any {
    if (Reflect.has(methods, name)) {
        return methods[name as keyof typeof methods];
    }
    return methods;
}

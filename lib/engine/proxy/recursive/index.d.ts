import {ParamsProxyEngineInterface} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';

/**
 *
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param params ParamsProxyEngineInterface
 */
export declare function proxyRecursive(target: object, name: string, params: ParamsProxyEngineInterface): object;

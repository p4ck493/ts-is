import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

/**
 *
 * @param index for to know which method use in wrapper
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param lists of all
 */
export declare function proxyRecursive(index: number, target: object, name: string, lists: ListsProxyEngineInterface): object;

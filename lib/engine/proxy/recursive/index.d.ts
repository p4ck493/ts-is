import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

/**
 *
 * @param index
 * @param target
 * @param name
 * @param lists
 */
export declare function proxyRecursive(index: number, target: object, name: string, lists: ListsProxyEngineInterface): object;

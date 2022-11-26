import {proxyRecursive} from './index';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

declare type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;
export declare function proxyRecursiveGet(index: number, lists: ListsProxyEngineInterface): proxyRecursiveGetType;
export {};

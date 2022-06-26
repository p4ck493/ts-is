import {FlagsToolInterface} from '../../../interfaces/tools/flags.tool.interface';
import {proxyRecursive} from './index';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

declare type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;
export declare function proxyRecursiveGet(flags: FlagsToolInterface, lists: ListsProxyEngineInterface): proxyRecursiveGetType;
export {};

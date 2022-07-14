import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

declare type proxyRecursiveApplyType = (targetApply: any, thisArg: unknown, argumentList: unknown[] & unknown[][]) => ReturnType<typeof targetApply>;
/**
 *
 * @param lists
 */
declare function proxyRecursiveApply(lists: ListsProxyEngineInterface): proxyRecursiveApplyType;
export default proxyRecursiveApply;

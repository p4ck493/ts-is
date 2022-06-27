import {FlagsToolInterface} from '../../../interfaces/tools/flags.tool.interface';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 *
 */
export declare function proxyRecursive(target: object, name: string, flags: FlagsToolInterface, lists: ListsProxyEngineInterface): object;

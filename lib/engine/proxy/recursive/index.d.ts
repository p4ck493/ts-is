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
 * @param {object} target
 * @param {string} name
 * @param {FlagsToolInterface} flags
 * @param {ListsProxyEngineInterface} lists
 */
export declare function proxyRecursive(target: object, name: string, flags: FlagsToolInterface, lists: ListsProxyEngineInterface): object;

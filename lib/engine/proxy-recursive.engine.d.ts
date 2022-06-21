import {afterWrapperType, beforeWrapperType} from '../types/wrapper.type';
import {FlagsToolInterface} from '../interfaces/tools/flags.tool.interface';

/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 *
 * @param target must by an object
 * @param name must be a string
 * @param flags TODO text
 * @param beforeWrapperList must be array of before wrappers
 * @param afterWrapperList must be array of after wrappers
 */
export declare function proxyRecursive(target: object, name: string, flags: FlagsToolInterface, beforeWrapperList: beforeWrapperType[], afterWrapperList: afterWrapperType[]): object;

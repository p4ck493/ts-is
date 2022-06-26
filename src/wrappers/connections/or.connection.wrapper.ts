import {connectionWrapperType} from '../../types/wrapper.type';
import {TrueMethod} from '../../methods/true.method';

/**
 *
 * @method Or
 * @param {unknown} argument
 * @param {((...arg: unknown[]) => boolean)[]} targetApplyList
 */
export const OrWrapper: connectionWrapperType = (
    argument: unknown,
    targetApplyList: ((...arg: unknown[]) => boolean)[],
): boolean => {
    return targetApplyList.reduce((previousValue: any, currentValue: any) => {
        if (TrueMethod(previousValue)) {
            return previousValue;
        }
        return currentValue(argument);
    }, null);
};

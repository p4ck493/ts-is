import {connectionWrapperType} from '../../types/wrapper.type';
import {TrueMethod} from '../../methods/true.method';

/**
 *
 * @method Or
 * @param {unknown} argument
 * @param {((...arg: unknown[]) => boolean)[]} targetApplyList
 * @param {unknown[]} secondArgumentList
 */
export const OrWrapper: connectionWrapperType = (
    argument: unknown,
    targetApplyList: ((...arg: unknown[]) => boolean)[],
    secondArgumentList?: unknown[],
): boolean => {
    return targetApplyList.reduce((previousValue: any, currentValue: any, currentIndex: number) => {
        if (TrueMethod(previousValue)) {
            return previousValue;
        }
        return currentValue.call(this, argument, secondArgumentList?.[currentIndex]);
    }, null);
};

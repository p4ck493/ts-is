import {connectionWrapperType} from '../../types/wrapper.type';
import Methods from '../../engine/methods';

/**
 *
 * @method Or
 */
export const OrWrapper: connectionWrapperType = (
    argument: unknown,
    targetApplyList: ((...arg: unknown[]) => boolean)[],
    secondArgumentList?: unknown[],
): boolean => {
    return targetApplyList.reduce((previousValue: any, currentValue: any, currentIndex: number) => {
        if (Methods.true(previousValue)) {
            return previousValue;
        }
        return currentValue.call(this, argument, secondArgumentList?.[currentIndex]);
    }, null);
};

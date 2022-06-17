import {wrapperType} from '../types/wrapper.type';

/**
 *
 * @param targetApply
 * @param argumentsList
 * @constructor
 */
export const NotWrapper: wrapperType = (targetApply: any, argumentsList: any) => {
    return !targetApply(...argumentsList);
}

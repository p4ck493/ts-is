import {afterWrapperType} from '../../types/wrapper.type';

/**
 *
 * @method Not
 * @param {boolean} result
 */
export const NotWrapper: afterWrapperType = (result: boolean): result is false => {
  return !result;
};

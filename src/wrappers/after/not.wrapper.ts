import {afterWrapperType} from '../../types/wrapper.type';

/**
 *
 * @method Not
 */
export const NotWrapper: afterWrapperType = (result: boolean): result is false => {
  return !result;
};

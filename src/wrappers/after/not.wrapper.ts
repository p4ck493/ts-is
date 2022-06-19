import { afterWrapperType } from '../../types/wrapper.type';

/**
 *
 * @param result must be boolean
 */
export const NotWrapper: afterWrapperType = (result: boolean): result is false => {
  return !result;
};

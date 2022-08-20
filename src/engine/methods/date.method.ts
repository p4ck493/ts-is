import { methods } from './index';

/**
 * @method date
 */
function DateMethod(argument: unknown): argument is Date {
  return methods.instanceof(argument, Date);
}

export default DateMethod;

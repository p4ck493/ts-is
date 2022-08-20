import {methods} from './index';

/**
 * @method date
 */
function DateMethod(argument) {
    return methods.instanceof(argument, Date);
}
export default DateMethod;

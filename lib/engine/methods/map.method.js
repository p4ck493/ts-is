import {methods} from './index';

/**
 * @method map
 */
function MapMethod(argument) {
    return methods.instanceof(argument, Map);
}
export default MapMethod;

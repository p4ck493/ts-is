import {methods} from './index';

/**
 * @method map
 */
function MapMethod<KEY = any, VALUE = any>(argument: unknown): argument is Map<KEY, VALUE> {
    return methods.instanceof(argument, Map);
}

export default MapMethod;

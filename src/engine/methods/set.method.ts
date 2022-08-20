import {methods} from './index';

/**
 * @method date
 */
function SetMethod<T>(argument: unknown): argument is Set<T> {
    return methods.instanceof(argument, Set<T>);
}

export default SetMethod;

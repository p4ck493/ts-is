import {methods} from './index';


/**
 *
 * @method Object
 * @example
 * Is.Object()
 * Is.Not.Object()
 * Is.All.Object()
 * Is.All.Not.Object()
 *
 * // Or with generic
 * Is.Object<PersonModel>()
 * Is.Not.Object<PersonModel>()
 * Is.All.Object<PersonModel>()
 * Is.All.Not.Object<PersonModel>()
 */
function ObjectMethod<T extends object>(argument: unknown): argument is T {
    return typeof argument === 'object' && !methods.array(argument) && !methods.null(argument);
}

export default ObjectMethod;

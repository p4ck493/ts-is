import {methods} from './index';

/**
 *
 * @method object
 * @example
 * is.object()
 * is.not.object()
 * is.all.object()
 * is.all.not.object()
 *
 * // Or with generic
 * is.object<PersonModel>()
 * is.not.object<PersonModel>()
 * is.all.object<PersonModel>()
 * is.all.not.object<PersonModel>()
 */
function ObjectMethod(argument) {
    return typeof argument === 'object' && !methods.array(argument) && !methods.null(argument);
}
export default ObjectMethod;

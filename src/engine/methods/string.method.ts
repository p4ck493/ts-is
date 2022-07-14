/**
 *
 * @method String
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */
import {ContextMethodInterface} from '../../interfaces/context-method.interface';

function StringMethod(argument: unknown): argument is string {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    return typeof argument === 'string';
}

export default StringMethod

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
    console.log('argument', argument, typeof argument === 'string');
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    console.log('context', context);
    return typeof argument === 'string';
}

export default StringMethod

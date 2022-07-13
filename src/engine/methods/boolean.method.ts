import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method Boolean
 * @example
 * Is.Boolean()
 * Is.Not.Boolean()
 * Is.All.Boolean()
 * Is.All.Not.Boolean()
 */
function BooleanMethod(argument: unknown): argument is boolean {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'boolean';
}

export default BooleanMethod;

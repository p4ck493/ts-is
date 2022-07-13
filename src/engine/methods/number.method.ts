import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method Number
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
function NumberMethod(argument: unknown): argument is number {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'number' && !isNaN(argument);
}

export default NumberMethod;

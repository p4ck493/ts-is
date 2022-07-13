import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method True
 * @example
 * Is.True()
 * Is.Not.True()
 * Is.All.True()
 * Is.All.Not.True()
 */
function TrueMethod(argument: unknown): argument is true {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === true;
}

export default TrueMethod;

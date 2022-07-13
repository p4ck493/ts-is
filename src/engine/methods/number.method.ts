import {RegisterInIs} from '../../decorators';


/**
 *
 * @method Number
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
@RegisterInIs({
    className: 'number',
    customMethod: 'method'
})
class NumberMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is number {
        const context: NumberMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        return typeof argument === 'number' && !isNaN(argument);
    }
}

export default NumberMethod;

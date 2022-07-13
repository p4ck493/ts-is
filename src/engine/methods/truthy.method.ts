import {RegisterInIs} from '../../decorators';
import FalsyMethod from './falsy.method';


/**
 *
 *
 * @method Truthy
 * @example
 * Is.Truthy()
 * Is.Not.Truthy()
 * Is.All.Truthy()
 * Is.All.Not.Truthy()
 */
@RegisterInIs({
    className: 'truthy',
    customMethod: 'method'
})
class TruthyMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is true {
        const context: TruthyMethod = this; // TODO ContextMethodInterface
        console.log(context);
        return !FalsyMethod.method(argument);
    }
}

export default TruthyMethod;

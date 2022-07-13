import {RegisterInIs} from '../../decorators';

/**
 *
 * @method Bigint
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
@RegisterInIs({
    className: 'bigInt',
    customMethod: 'method'
})
class BigIntMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is BigInteger {
        const context: BigIntMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        return typeof argument === 'bigint';
    }
}

export default BigIntMethod;

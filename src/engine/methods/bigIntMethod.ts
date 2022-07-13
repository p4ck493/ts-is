import {ContextMethodInterface} from '../../interfaces/context-method.interface';

/**
 *
 * @method Bigint
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
function BigIntMethod(argument: unknown): argument is BigInteger {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'bigint';
}

export default BigIntMethod;

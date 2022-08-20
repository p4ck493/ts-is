import ArrayMethod from './array.method';
import BigIntMethod from './bigIntMethod';
import BooleanMethod from './boolean.method';
import CompareMethod from './compare.method';
import EmptyMethod from './empty.method';
import FalseMethod from './false.method';
import FalsyMethod from './falsy.method';
import FunctionMethod from './function.method';
import InstanceofMethod from './instanceof.method';
import NullMethod from './null.method';
import NumberMethod from './number.method';
import ObjectMethod from './object.method';
import StringMethod from './string.method';
import SymbolMethod from './symbol.method';
import TrueMethod from './true.method';
import TruthyMethod from './truthy.method';
import UndefinedMethod from './undefined.method';
import DateMethod from './date.method';
import SetMethod from './set.method';
import ErrorMethod from './error.method';

/**
 * Use this const for register classes.
 * Example:
 * class PersonModel {
 *     public name: string;
 * }
 *
 * Object.assign(models, {PersonModel})
 *
 * Or you can use decorator:
 *
 * @RegisterInIsDecorator
 * class PersonModel {
 *     public name: string;
 * }
 *
 */
// TODO find how we can add only autocomplete
export const methods = {
    array: ArrayMethod,
    bigInt: BigIntMethod,
    boolean: BooleanMethod,
    compare: CompareMethod,
    date: DateMethod,
    empty: EmptyMethod,
    error: ErrorMethod,
    false: FalseMethod,
    falsy: FalsyMethod,
    function: FunctionMethod,
    instanceof: InstanceofMethod,
    null: NullMethod,
    number: NumberMethod,
    object: ObjectMethod,
    set: SetMethod,
    string: StringMethod,
    symbol: SymbolMethod,
    true: TrueMethod,
    truthy: TruthyMethod,
    undefined: UndefinedMethod,
};

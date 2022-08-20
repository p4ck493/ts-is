import ArrayMethod from './array.method';
import BigIntMethod from './bigInt.method';
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
import EvalErrorMethod from './eval-error.method';
import ReferenceErrorMethod from './reference-error.method';
import SyntaxErrorMethod from './syntax-error.method';
import TypeErrorMethod from './type-error.method';

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
    evalError: EvalErrorMethod,
    false: FalseMethod,
    falsy: FalsyMethod,
    function: FunctionMethod,
    instanceof: InstanceofMethod,
    null: NullMethod,
    number: NumberMethod,
    object: ObjectMethod,
    referenceError: ReferenceErrorMethod,
    set: SetMethod,
    string: StringMethod,
    symbol: SymbolMethod,
    syntaxError: SyntaxErrorMethod,
    true: TrueMethod,
    truthy: TruthyMethod,
    typeError: TypeErrorMethod,
    undefined: UndefinedMethod,
};

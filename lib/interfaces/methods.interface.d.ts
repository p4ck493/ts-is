import ArrayMethod from '../engine/methods/array.method';
import BigIntMethod from '../engine/methods/bigIntMethod';
import BooleanMethod from '../engine/methods/boolean.method';
import CompareMethod from '../engine/methods/compare.method';
import FalseMethod from '../engine/methods/false.method';
import FunctionMethod from '../engine/methods/function.method';
import NullMethod from '../engine/methods/null.method';
import NumberMethod from '../engine/methods/number.method';
import ObjectMethod from '../engine/methods/object.method';
import StringMethod from '../engine/methods/string.method';
import SymbolMethod from '../engine/methods/symbol.method';
import TrueMethod from '../engine/methods/true.method';
import UndefinedMethod from '../engine/methods/undefined.method';
import EmptyMethod from '../engine/methods/empty.method';
import InstanceofMethod from '../engine/methods/instanceof.method';
import TruthyMethod from '../engine/methods/truthy.method';
import FalsyMethod from '../engine/methods/falsy.method';
import {ConnectionWrappersInterface} from './wrappers.interface';
import DateMethod from '../engine/methods/date.method';

export interface MethodInterface {
    [key: string]: {
        useCustomMethod: boolean;
        method: any;
    } & ConnectionWrappersInterface & MethodsInterface & ((argument: unknown) => boolean);
}
/**
 * Declare names and types of methods
 */
export interface MethodsInterface {
    array: typeof ArrayMethod & MethodInterface;
    bigInt: typeof BigIntMethod & MethodInterface;
    boolean: typeof BooleanMethod & MethodInterface;
    compare: typeof CompareMethod & MethodInterface;
    false: typeof FalseMethod & MethodInterface;
    falsy: typeof FalsyMethod & MethodInterface;
    function: typeof FunctionMethod & MethodInterface;
    instanceof: typeof InstanceofMethod & MethodInterface;
    null: typeof NullMethod & MethodInterface;
    number: typeof NumberMethod & MethodInterface;
    object: typeof ObjectMethod & MethodInterface;
    string: typeof StringMethod & MethodInterface;
    symbol: typeof SymbolMethod & MethodInterface;
    true: typeof TrueMethod & MethodInterface;
    truthy: typeof TruthyMethod & MethodInterface;
    undefined: typeof UndefinedMethod & MethodInterface;
    empty: typeof EmptyMethod & MethodInterface;
    date: typeof DateMethod & MethodInterface;
}

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

export interface MethodInterface {
    [key: string]: {
        useCustomMethod: boolean;
        method: any;
    } & ConnectionWrappersInterface;
}
/**
 * Declare names and types of methods
 */
export interface MethodsInterface {
    array: typeof ArrayMethod & ConnectionWrappersInterface;
    bigInt: typeof BigIntMethod & ConnectionWrappersInterface;
    boolean: typeof BooleanMethod & ConnectionWrappersInterface;
    compare: typeof CompareMethod & ConnectionWrappersInterface;
    false: typeof FalseMethod & ConnectionWrappersInterface;
    falsy: typeof FalsyMethod & ConnectionWrappersInterface;
    function: typeof FunctionMethod & ConnectionWrappersInterface;
    instanceof: typeof InstanceofMethod & ConnectionWrappersInterface;
    null: typeof NullMethod & ConnectionWrappersInterface;
    number: typeof NumberMethod & ConnectionWrappersInterface;
    object: typeof ObjectMethod & ConnectionWrappersInterface;
    string: typeof StringMethod & ConnectionWrappersInterface;
    symbol: typeof SymbolMethod & ConnectionWrappersInterface;
    true: typeof TrueMethod & ConnectionWrappersInterface;
    truthy: typeof TruthyMethod & ConnectionWrappersInterface;
    undefined: typeof UndefinedMethod & ConnectionWrappersInterface;
    empty: typeof EmptyMethod & ConnectionWrappersInterface;
}
/**
 * Declare names and types of methods
 */
export interface ProxyMethodsInterface {
    array: typeof ArrayMethod.method & ConnectionWrappersInterface;
    bigInt: typeof BigIntMethod.method & ConnectionWrappersInterface;
    boolean: typeof BooleanMethod.method & ConnectionWrappersInterface;
    compare: typeof CompareMethod.method & ConnectionWrappersInterface;
    false: typeof FalseMethod.method & ConnectionWrappersInterface;
    falsy: typeof FalsyMethod.method & ConnectionWrappersInterface;
    function: typeof FunctionMethod.method & ConnectionWrappersInterface;
    instanceof: typeof InstanceofMethod.method & ConnectionWrappersInterface;
    null: typeof NullMethod.method & ConnectionWrappersInterface;
    number: typeof NumberMethod.method & ConnectionWrappersInterface;
    object: typeof ObjectMethod.method & ConnectionWrappersInterface;
    string: typeof StringMethod.method & ConnectionWrappersInterface;
    symbol: typeof SymbolMethod.method & ConnectionWrappersInterface;
    true: typeof TrueMethod.method & ConnectionWrappersInterface;
    truthy: typeof TruthyMethod.method & ConnectionWrappersInterface;
    undefined: typeof UndefinedMethod.method & ConnectionWrappersInterface;
    empty: typeof EmptyMethod.method & ConnectionWrappersInterface;
}

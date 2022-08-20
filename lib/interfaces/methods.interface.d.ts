import ArrayMethod from '../engine/methods/array.method';
import BigIntMethod from '../engine/methods/bigInt.method';
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
import SetMethod from '../engine/methods/set.method';
import {IsType} from '../types/is.type';
import ErrorMethod from '../engine/methods/error.method';
import EvalErrorMethod from '../engine/methods/eval-error.method';
import ReferenceErrorMethod from '../engine/methods/reference-error.method';
import SyntaxErrorMethod from '../engine/methods/syntax-error.method';
import TypeErrorMethod from '../engine/methods/type-error.method';
import URIErrorMethod from '../engine/methods/uri-error.method';
import RegExpMethod from '../engine/methods/regexp.method';
import MapMethod from '../engine/methods/map.method';

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
    array: typeof ArrayMethod & IsType;
    bigInt: typeof BigIntMethod & IsType;
    boolean: typeof BooleanMethod & IsType;
    compare: typeof CompareMethod & IsType;
    false: typeof FalseMethod & IsType;
    falsy: typeof FalsyMethod & IsType;
    function: typeof FunctionMethod & IsType;
    instanceof: typeof InstanceofMethod & IsType;
    null: typeof NullMethod & IsType;
    number: typeof NumberMethod & IsType;
    object: typeof ObjectMethod & IsType;
    string: typeof StringMethod & IsType;
    symbol: typeof SymbolMethod & IsType;
    true: typeof TrueMethod & IsType;
    truthy: typeof TruthyMethod & IsType;
    undefined: typeof UndefinedMethod & IsType;
    empty: typeof EmptyMethod & IsType;
    date: typeof DateMethod & IsType;
    set: typeof SetMethod & IsType;
    error: typeof ErrorMethod & IsType;
    evalError: typeof EvalErrorMethod & IsType;
    referenceError: typeof ReferenceErrorMethod & IsType;
    syntaxError: typeof SyntaxErrorMethod & IsType;
    typeError: typeof TypeErrorMethod & IsType;
    URIError: typeof URIErrorMethod & IsType;
    regExp: typeof RegExpMethod & IsType;
    map: typeof MapMethod & IsType;
}

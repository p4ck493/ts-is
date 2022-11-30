import {ArrayMethod} from './array.method';
import {BigIntMethod} from './bigInt.method';
import {BooleanMethod} from './boolean.method';
import {CompareMethod} from './compare.method';
import {EmptyMethod} from './empty.method';
import {FalseMethod} from './false.method';
import {FalsyMethod} from './falsy.method';
import {FunctionMethod} from './function.method';
import {InstanceofMethod} from './instanceof.method';
import {NullMethod} from './null.method';
import {NumberMethod} from './number.method';
import {ObjectMethod} from './object.method';
import {StringMethod} from './string.method';
import {SymbolMethod} from './symbol.method';
import {TrueMethod} from './true.method';
import {TruthyMethod} from './truthy.method';
import {UndefinedMethod} from './undefined.method';
import {DateMethod} from './date.method';
import {SetMethod} from './set.method';
import {ErrorMethod} from './error.method';
import {SyntaxErrorMethod} from './syntax-error.method';
import {TypeErrorMethod} from './type-error.method';
import {RegExpMethod} from './regexp.method';
import {MapMethod} from './map.method';
import {ConnectionWrappersInterface} from '../../interfaces/wrappers.interface';
import {IsType} from '../../types/is.type';
import {ZeroMethod} from './zero.method';
import {PrimitiveMethod} from './primitive.method';

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
    map: typeof MapMethod & IsType;
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
    syntaxError: typeof SyntaxErrorMethod & IsType;
    typeError: typeof TypeErrorMethod & IsType;
    regExp: typeof RegExpMethod & IsType;
    zero: typeof ZeroMethod & IsType;
    primitive: typeof PrimitiveMethod & IsType;
}
export declare const methods: MethodsInterface & MethodInterface;

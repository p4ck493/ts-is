import {ArrayMethod} from '../methods/array.method';
import {BigintMethod} from '../methods/bigint.method';
import {BooleanMethod} from '../methods/boolean.method';
import {CompareMethod} from '../methods/compare.method';
import {EmptyObjectMethod} from '../methods/empty-object.method';
import {EmptyStringMethod} from '../methods/empty-string.method';
import {FalseMethod} from '../methods/false.method';
import {FunctionMethod} from '../methods/function.method';
import {NullMethod} from '../methods/null.method';
import {NullOrUndefinedMethod} from '../methods/null-or-undefined.method';
import {NullOrUndefinedOrEmptyMethod} from '../methods/null-or-undefined-or-empty.method';
import {NumberMethod} from '../methods/number.method';
import {ObjectMethod} from '../methods/object.method';
import {StringMethod} from '../methods/string.method';
import {SymbolMethod} from '../methods/symbol.method';
import {TrueMethod} from '../methods/true.method';
import {UndefinedMethod} from '../methods/undefined.method';
import {EmptyMethod} from '../methods/empty.method';
import {InstanceofMethod} from '../methods/instanceof.method';
import {TruthyMethod} from '../methods/truthy.method';
import {FalsyMethod} from '../methods/falsy.method';
import {AfterWrappersInterface, BeforeWrappersInterface} from './wrappers.interface';

/**
 * Declare names and types of methods
 */
export interface MethodsInterface {
    Array: (typeof ArrayMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    BigInt: (typeof BigintMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Boolean: (typeof BooleanMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Compare: (typeof CompareMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    EmptyObject: (typeof EmptyObjectMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    EmptyString: (typeof EmptyStringMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    False: (typeof FalseMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Falsy: (typeof FalsyMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Function: (typeof FunctionMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Instanceof: (typeof InstanceofMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Null: (typeof NullMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    NullOrUndefined: (typeof NullOrUndefinedMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    NullOrUndefinedOrEmpty: (typeof NullOrUndefinedOrEmptyMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Number: (typeof NumberMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Object: (typeof ObjectMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    String: (typeof StringMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Symbol: (typeof SymbolMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    True: (typeof TrueMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Truthy: (typeof TruthyMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Undefined: (typeof UndefinedMethod) & BeforeWrappersInterface & AfterWrappersInterface;
    Empty: (typeof EmptyMethod) & BeforeWrappersInterface & AfterWrappersInterface;
}

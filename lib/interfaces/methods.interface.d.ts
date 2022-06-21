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
import {TruthMethod} from '../methods/truth.method';
import {FalsyMethod} from '../methods/falsy.method';

/**
 * Declare names and types of methods
 */
export interface MethodsInterface {
    Array: typeof ArrayMethod;
    BigInt: typeof BigintMethod;
    Boolean: typeof BooleanMethod;
    Compare: typeof CompareMethod;
    EmptyObject: typeof EmptyObjectMethod;
    EmptyString: typeof EmptyStringMethod;
    False: typeof FalseMethod;
    Falsy: typeof FalsyMethod;
    Function: typeof FunctionMethod;
    Instanceof: typeof InstanceofMethod;
    Null: typeof NullMethod;
    NullOrUndefined: typeof NullOrUndefinedMethod;
    NullOrUndefinedOrEmpty: typeof NullOrUndefinedOrEmptyMethod;
    Number: typeof NumberMethod;
    Object: typeof ObjectMethod;
    String: typeof StringMethod;
    Symbol: typeof SymbolMethod;
    True: typeof TrueMethod;
    Truth: typeof TruthMethod;
    Undefined: typeof UndefinedMethod;
    Empty: typeof EmptyMethod;
}

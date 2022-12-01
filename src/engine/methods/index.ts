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
import {ConnectionWrappersInterface} from '../../interfaces/wrappers.interface';
import {IsType} from '../../types/is.type';
import {ZeroMethod} from './zero.method';
import {PrimitiveMethod} from './primitive.method';
import {PromiseMethod} from './promise.method';

export interface MethodInterface {
    [key: string]: {
        useCustomMethod: boolean;
        method: any;
    } & ConnectionWrappersInterface &
        MethodsInterface &
        ((argument: unknown) => boolean);
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
    zero: typeof ZeroMethod & IsType;
    primitive: typeof PrimitiveMethod & IsType;
    promise: typeof PromiseMethod & IsType;

    // EXTERNAL
    Map?: typeof Map & IsType;
    String?: typeof String & IsType;
    Date?: typeof Date & IsType;
    Set?: typeof Set & IsType;
    URIError?: typeof URIError & IsType;
    RegExp?: typeof RegExp & IsType;
    WeakSet?: typeof WeakSet & IsType;
    WeakMap?: typeof WeakMap & IsType;
    DataView?: typeof DataView & IsType;
    Float32Array?: typeof Float32Array & IsType;
    Int32Array?: typeof Int32Array & IsType;
    Uint8ClampedArray?: typeof Uint8ClampedArray & IsType;
    Int8Array?: typeof Int8Array & IsType;
    Uint8Array?: typeof Uint8Array & IsType;
    Int16Array?: typeof Int16Array & IsType;
    Uint16Array?: typeof Uint16Array & IsType;
    Uint32Array?: typeof Uint32Array & IsType;
    Float64Array?: typeof Float64Array & IsType;
    BigInt64Array?: typeof BigInt64Array & IsType;
    BigUint64Array?: typeof BigUint64Array & IsType;
    Error?: typeof Error & IsType;
    EvalError?: typeof EvalError & IsType;
    ReferenceError?: typeof ReferenceError & IsType;
    SyntaxError?: typeof SyntaxError & IsType;
    TypeError?: typeof TypeError & IsType;
}

export const methods: MethodsInterface & MethodInterface = {
    array: ArrayMethod as any,
    bigInt: BigIntMethod as any,
    boolean: BooleanMethod as any,
    compare: CompareMethod as any,
    empty: EmptyMethod as any,
    false: FalseMethod as any,
    falsy: FalsyMethod as any,
    function: FunctionMethod as any,
    instanceof: InstanceofMethod as any,
    null: NullMethod as any,
    number: NumberMethod as any,
    object: ObjectMethod as any,
    string: StringMethod as any,
    symbol: SymbolMethod as any,
    true: TrueMethod as any,
    truthy: TruthyMethod as any,
    undefined: UndefinedMethod as any,
    zero: ZeroMethod as any,
    primitive: PrimitiveMethod as any,
    promise: PromiseMethod as any,
};

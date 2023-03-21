import {ArrayMethod} from './array.method';
import {BigIntMethod} from './bigInt.method';
import {BooleanMethod} from './boolean.method';
import {CompareMethod} from './compare.method';
import {EmptyMethod} from './empty.method';
import {FalseMethod} from './false.method';
import {FalsyMethod} from './falsy.method';
import {InstanceofMethod} from './instanceof.method';
import {NullMethod} from './null.method';
import {NumberMethod} from './number.method';
import {ObjectMethod} from './object.method';
import {StringMethod} from './string.method';
import {SymbolMethod} from './symbol.method';
import {TrueMethod} from './true.method';
import {TruthyMethod} from './truthy.method';
import {UndefinedMethod} from './undefined.method';
import {ZeroMethod} from './zero.method';
import {PrimitiveMethod} from './primitive.method';
import {PromiseMethod} from './promise.method';
import {AsyncFunctionMethod, FunctionMethod, GeneratorFunctionMethod} from './function.method';
import {PositiveMethod} from './positive.method';
import {NegativeMethod} from './negative.method';
import {InfinityMethod} from './infinity.method';
import {HTMLElementsMethodsInterface} from '../interfaces/methods/HTML-elements.methods.interface';
import {ExternalMethodsInterface} from '../interfaces/methods/external.methods.interface';
import {Ipv6Method} from './ipv6.method';
import {Ipv4Method} from './ipv4.method';
import {MacAddressMethod} from './mac-address.method';
import {WordMethod} from './word.method';
import {OddMethod} from './odd.method';
import {EvenMethod} from './even.method';
import {LenMethod} from './len.method';
import {NumericMethod} from './numeric.method';
import {IntMethod} from './int.method';
import {CharMethod} from './char.method';

type mixTypes<T> = T & AllMethodsInterface;

export type ConvertTypeToGenericMixTypes<T> = {
    [key in keyof T]: mixTypes<T[key]>;
};

type instanceofType<T = () => void> = (argument: unknown) => argument is T;
type instanceofTypeMix<T = () => void> = mixTypes<instanceofType<T>>;

export type ConvertTypeToGenericInstanceOf<T> = {
    [key in keyof T]: instanceofTypeMix<T[key]>;
};

type LengthMethodType = typeof LenMethod;

export const predefinedMethods = {
    len: LenMethod,
    array: ArrayMethod,
    asyncFunction: AsyncFunctionMethod,
    bigInt: BigIntMethod,
    boolean: BooleanMethod,
    char: CharMethod,
    compare: CompareMethod,
    empty: EmptyMethod,
    even: EvenMethod,
    false: FalseMethod,
    falsy: FalsyMethod,
    function: FunctionMethod,
    generatorFunction: GeneratorFunctionMethod,
    infinity: InfinityMethod,
    instanceof: InstanceofMethod,
    int: IntMethod,
    ipv4: Ipv4Method,
    ipv6: Ipv6Method,
    macAddress: MacAddressMethod,
    negative: NegativeMethod,
    null: NullMethod,
    number: NumberMethod,
    numeric: NumericMethod,
    object: ObjectMethod,
    odd: OddMethod,
    positive: PositiveMethod,
    primitive: PrimitiveMethod,
    promise: PromiseMethod,
    string: StringMethod,
    symbol: SymbolMethod,
    true: TrueMethod,
    truthy: TruthyMethod,
    undefined: UndefinedMethod,
    word: WordMethod,
    zero: ZeroMethod,
};

export interface AllMethodsInterface
    extends ConvertTypeToGenericMixTypes<typeof predefinedMethods>,
        ConvertTypeToGenericInstanceOf<ExternalMethodsInterface>,
        ConvertTypeToGenericInstanceOf<HTMLElementsMethodsInterface>,
        Omit<CallableFunction, "length"> {
    Function: instanceofType;
    or: AllMethodsInterface;
    not: AllMethodsInterface;

    // Predefined interfaces of methods which has some options
    len_N: LengthMethodType,
    len_gt_N_lt_N: LengthMethodType,
    len_lt_N: LengthMethodType,
    len_gt_N: LengthMethodType,
    len_gte_N_lt_N: LengthMethodType,
    len_gte_N_lte_N: LengthMethodType,
    len_lte_N: LengthMethodType,
    len_gte_N: LengthMethodType,
    len_gt_N_lte_N: LengthMethodType,

    [key: string]: instanceofType | AllMethodsInterface | any;
}

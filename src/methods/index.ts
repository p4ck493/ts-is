import { ArrayMethod } from './array.method';
import { BigIntMethod } from './bigInt.method';
import { BooleanMethod } from './boolean.method';
import { CompareMethod } from './compare.method';
import { EmptyMethod } from './empty.method';
import { FalseMethod } from './false.method';
import { FalsyMethod } from './falsy.method';
import { InstanceofMethod } from './instanceof.method';
import { NullMethod } from './null.method';
import { NumberMethod } from './number.method';
import { ObjectMethod } from './object.method';
import { StringMethod } from './string.method';
import { SymbolMethod } from './symbol.method';
import { TrueMethod } from './true.method';
import { TruthyMethod } from './truthy.method';
import { UndefinedMethod } from './undefined.method';
import { ZeroMethod } from './zero.method';
import { PrimitiveMethod } from './primitive.method';
import { PromiseMethod } from './promise.method';
import { AsyncFunctionMethod, FunctionMethod, GeneratorFunctionMethod } from './function.method';
import { PositiveMethod } from './positive.method';
import { NegativeMethod } from './negative.method';
import { InfinityMethod } from './infinity.method';
import { HTMLElementsMethodsInterface } from '../interfaces/methods/HTML-elements.methods.interface';
import { ExternalMethodsInterface } from '../interfaces/methods/external.methods.interface';

type mixTypes<T> = T & AllMethodsInterface;

export type ConvertTypeToGenericMixTypes<T> = {
  [key in keyof T]: mixTypes<T[key]>;
};

type instanceofType<T = () => void> = (argument: unknown) => argument is T;
type instanceofTypeMix<T = () => void> = mixTypes<instanceofType<T>>;

export type ConvertTypeToGenericInstanceOf<T> = {
  [key in keyof T]: instanceofTypeMix<T[key]>;
};

export const predefinedMethods = {
  array: ArrayMethod,
  bigInt: BigIntMethod,
  boolean: BooleanMethod,
  compare: CompareMethod,
  empty: EmptyMethod,
  false: FalseMethod,
  falsy: FalsyMethod,
  instanceof: InstanceofMethod,
  function: FunctionMethod,
  asyncFunction: AsyncFunctionMethod,
  generatorFunction: GeneratorFunctionMethod,
  null: NullMethod,
  positive: PositiveMethod,
  negative: NegativeMethod,
  number: NumberMethod,
  object: ObjectMethod,
  string: StringMethod,
  symbol: SymbolMethod,
  true: TrueMethod,
  truthy: TruthyMethod,
  undefined: UndefinedMethod,
  zero: ZeroMethod,
  primitive: PrimitiveMethod,
  promise: PromiseMethod,
  infinity: InfinityMethod,
};

export interface AllMethodsInterface
  extends ConvertTypeToGenericMixTypes<typeof predefinedMethods>,
    ConvertTypeToGenericInstanceOf<ExternalMethodsInterface>,
    ConvertTypeToGenericInstanceOf<HTMLElementsMethodsInterface>,
    CallableFunction {
  Function: instanceofType;
  or: AllMethodsInterface;
  not: AllMethodsInterface;

  [key: string]: instanceofType | AllMethodsInterface | any;
}

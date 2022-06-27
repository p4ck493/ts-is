import {CompareMethod} from './compare.method';
import {EmptyObjectMethod} from './empty-object.method';
import {EmptyStringMethod} from './empty-string.method';
import {FalseMethod} from './false.method';
import {NullMethod} from './null.method';
import {NumberMethod} from './number.method';
import {TrueMethod} from './true.method';
import {UndefinedMethod} from './undefined.method';
import {EmptyMethod} from './empty.method';
import {ArrayMethod} from './array.method';
import {ObjectMethod} from './object.method';
import {StringMethod} from './string.method';
import {BooleanMethod} from './boolean.method';
import {SymbolMethod} from './symbol.method';
import {BigIntMethod} from './bigIntMethod';
import {FunctionMethod} from './function.method';
import {InstanceofMethod} from './instanceof.method';
import {FalsyMethod} from './falsy.method';
import {TruthyMethod} from './truthy.method';
import {MethodsInterface} from '../interfaces/methods.interface';
import {EmptyArrayMethod} from './empty-array.method';

/**
 * Export all accesses methods in library
 */
export const Methods: MethodsInterface = {
  Array: ArrayMethod as any,
  BigInt: BigIntMethod as any,
  Boolean: BooleanMethod as any,
  Compare: CompareMethod as any,
  EmptyArray: EmptyArrayMethod as any,
  EmptyObject: EmptyObjectMethod as any,
  EmptyString: EmptyStringMethod as any,
  False: FalseMethod as any,
  Falsy: FalsyMethod as any,
  Function: FunctionMethod as any,
  Instanceof: InstanceofMethod as any,
  Null: NullMethod as any,
  Number: NumberMethod as any,
  String: StringMethod as any,
  Object: ObjectMethod as any,
  True: TrueMethod as any,
  Truthy: TruthyMethod as any,
  Symbol: SymbolMethod as any,
  Undefined: UndefinedMethod as any,
  Empty: EmptyMethod as any,
};

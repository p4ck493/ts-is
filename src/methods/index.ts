import {CompareMethod} from './compare.method';
import {EmptyObjectMethod} from './empty-object.method';
import {EmptyStringMethod} from './empty-string.method';
import {FalseMethod} from './false.method';
import {NullMethod} from './null.method';
import {NullOrUndefinedMethod} from './null-or-undefined.method';
import {NullOrUndefinedOrEmptyMethod} from './null-or-undefined-or-empty.method';
import {NumberMethod} from './number.method';
import {TrueMethod} from './true.method';
import {UndefinedMethod} from './undefined.method';
import {EmptyMethod} from './empty.method';
import {ArrayMethod} from './array.method';
import {ObjectMethod} from './object.method';
import {StringMethod} from './string.method';
import {BooleanMethod} from './boolean.method';
import {SymbolMethod} from './symbol.method';
import {BigintMethod} from './bigint.method';
import {FunctionMethod} from './function.method';
import {MethodsInterface} from '../interfaces/methods.interface';
import {InstanceofMethod} from './instanceof.method';
import {FalsyMethod} from './falsy.method';
import {TruthyMethod} from './truthy.method';

/**
 * Export all accesses methods in library
 */
export const Methods: MethodsInterface = {
  Array: ArrayMethod,
  BigInt: BigintMethod,
  Boolean: BooleanMethod,
  Compare: CompareMethod,
  EmptyObject: EmptyObjectMethod,
  EmptyString: EmptyStringMethod,
  False: FalseMethod,
  Falsy: FalsyMethod,
  Function: FunctionMethod,
  Instanceof: InstanceofMethod,
  Null: NullMethod,
  NullOrUndefined: NullOrUndefinedMethod,
  NullOrUndefinedOrEmpty: NullOrUndefinedOrEmptyMethod,
  Number: NumberMethod,
  String: StringMethod,
  Object: ObjectMethod,
  True: TrueMethod,
  Truthy: TruthyMethod,
  Symbol: SymbolMethod,
  Undefined: UndefinedMethod,
  Empty: EmptyMethod,
};

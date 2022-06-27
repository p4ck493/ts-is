import {ArrayMethod} from '../methods/array.method';
import {BigIntMethod} from '../methods/bigIntMethod';
import {BooleanMethod} from '../methods/boolean.method';
import {CompareMethod} from '../methods/compare.method';
import {EmptyObjectMethod} from '../methods/empty-object.method';
import {EmptyStringMethod} from '../methods/empty-string.method';
import {FalseMethod} from '../methods/false.method';
import {FunctionMethod} from '../methods/function.method';
import {NullMethod} from '../methods/null.method';
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
import {ConnectionWrappersInterface} from './wrappers.interface';
import {EmptyArrayMethod} from '../methods/empty-array.method';

/**
 * Declare names and types of methods
 */
export interface MethodsInterface {
  Array: (typeof ArrayMethod) & ConnectionWrappersInterface;
  BigInt: (typeof BigIntMethod) & ConnectionWrappersInterface;
  Boolean: (typeof BooleanMethod) & ConnectionWrappersInterface;
  Compare: (typeof CompareMethod) & ConnectionWrappersInterface;
  EmptyArray: (typeof EmptyArrayMethod) & ConnectionWrappersInterface;
  EmptyObject: (typeof EmptyObjectMethod) & ConnectionWrappersInterface;
  EmptyString: (typeof EmptyStringMethod) & ConnectionWrappersInterface;
  False: (typeof FalseMethod) & ConnectionWrappersInterface;
  Falsy: (typeof FalsyMethod) & ConnectionWrappersInterface;
  Function: (typeof FunctionMethod) & ConnectionWrappersInterface;
  Instanceof: (typeof InstanceofMethod) & ConnectionWrappersInterface;
  Null: (typeof NullMethod) & ConnectionWrappersInterface;
  Number: (typeof NumberMethod) & ConnectionWrappersInterface;
  Object: (typeof ObjectMethod) & ConnectionWrappersInterface;
  String: (typeof StringMethod) & ConnectionWrappersInterface;
  Symbol: (typeof SymbolMethod) & ConnectionWrappersInterface;
  True: (typeof TrueMethod) & ConnectionWrappersInterface;
  Truthy: (typeof TruthyMethod) & ConnectionWrappersInterface;
  Undefined: (typeof UndefinedMethod) & ConnectionWrappersInterface;
  Empty: (typeof EmptyMethod) & ConnectionWrappersInterface;
}

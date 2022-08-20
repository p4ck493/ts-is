import {MethodInterface, MethodsInterface} from '../../interfaces/methods.interface';
import ArrayMethod from './array.method';
import BigIntMethod from './bigInt.method';
import BooleanMethod from './boolean.method';
import CompareMethod from './compare.method';
import EmptyMethod from './empty.method';
import FalseMethod from './false.method';
import FalsyMethod from './falsy.method';
import FunctionMethod from './function.method';
import InstanceofMethod from './instanceof.method';
import NullMethod from './null.method';
import NumberMethod from './number.method';
import ObjectMethod from './object.method';
import StringMethod from './string.method';
import SymbolMethod from './symbol.method';
import TrueMethod from './true.method';
import TruthyMethod from './truthy.method';
import UndefinedMethod from './undefined.method';
import DateMethod from './date.method';
import SetMethod from './set.method';
import ErrorMethod from './error.method';
import EvalErrorMethod from './eval-error.method';
import ReferenceErrorMethod from './reference-error.method';
import SyntaxErrorMethod from './syntax-error.method';
import TypeErrorMethod from './type-error.method';
import URIErrorMethod from './uri-error.method';

/**
 * Use this const for register classes.
 * Example:
 * class PersonModel {
 *     public name: string;
 * }
 *
 * Object.assign(models, {PersonModel})
 *
 * Or you can use decorator:
 *
 * @RegisterInIsDecorator
 * class PersonModel {
 *     public name: string;
 * }
 *
 */
// TODO find how we can add only autocomplete
export const methods: MethodsInterface & MethodInterface = {
  array: ArrayMethod as any,
  bigInt: BigIntMethod as any,
  boolean: BooleanMethod as any,
  compare: CompareMethod as any,
  date: DateMethod as any,
  empty: EmptyMethod as any,
  error: ErrorMethod as any,
  evalError: EvalErrorMethod as any,
  false: FalseMethod as any,
  falsy: FalsyMethod as any,
  function: FunctionMethod as any,
  instanceof: InstanceofMethod as any,
  null: NullMethod as any,
  number: NumberMethod as any,
  object: ObjectMethod as any,
  referenceError: ReferenceErrorMethod as any,
  set: SetMethod as any,
  string: StringMethod as any,
  symbol: SymbolMethod as any,
  syntaxError: SyntaxErrorMethod as any,
  true: TrueMethod as any,
  truthy: TruthyMethod as any,
  typeError: TypeErrorMethod as any,
  undefined: UndefinedMethod as any,
  URIError: URIErrorMethod as any,
};

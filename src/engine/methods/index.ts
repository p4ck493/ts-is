import { ArrayMethod } from './array.method';
import { BigIntMethod } from './bigInt.method';
import { BooleanMethod } from './boolean.method';
import { CompareMethod } from './compare.method';
import { EmptyMethod } from './empty.method';
import { FalseMethod } from './false.method';
import { FalsyMethod } from './falsy.method';
import { FunctionMethod } from './function.method';
import { InstanceofMethod } from './instanceof.method';
import { NullMethod } from './null.method';
import { NumberMethod } from './number.method';
import { ObjectMethod } from './object.method';
import { StringMethod } from './string.method';
import { SymbolMethod } from './symbol.method';
import { TrueMethod } from './true.method';
import { TruthyMethod } from './truthy.method';
import { UndefinedMethod } from './undefined.method';
import { ConnectionWrappersInterface } from '../../interfaces/wrappers.interface';
import { IsType } from '../../types/is.type';
import { ZeroMethod } from './zero.method';
import { PrimitiveMethod } from './primitive.method';
import { PromiseMethod } from './promise.method';

export interface BaseMethodsInterface {
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
}

export interface ExternalMethodsInterface {
  Map: typeof InstanceofMethod<typeof Map> & IsType;
  String: typeof InstanceofMethod<string> & IsType;
  Date: typeof InstanceofMethod<Date> & IsType;
  Set: typeof InstanceofMethod<typeof Set> & IsType;
  URIError: typeof InstanceofMethod<URIError> & IsType;
  RegExp: typeof InstanceofMethod<RegExp> & IsType;
  WeakSet: typeof InstanceofMethod<typeof WeakSet> & IsType;
  WeakMap: typeof InstanceofMethod<typeof WeakMap> & IsType;
  DataView: typeof InstanceofMethod<DataView> & IsType;
  Float32Array: typeof InstanceofMethod<Float32Array> & IsType;
  Int32Array: typeof InstanceofMethod<Int32Array> & IsType;
  Uint8ClampedArray: typeof InstanceofMethod<Uint8ClampedArray> & IsType;
  Int8Array: typeof InstanceofMethod<Int8Array> & IsType;
  Uint8Array: typeof InstanceofMethod<Uint8Array> & IsType;
  Int16Array: typeof InstanceofMethod<Int16Array> & IsType;
  Uint16Array: typeof InstanceofMethod<Uint16Array> & IsType;
  Uint32Array: typeof InstanceofMethod<Uint32Array> & IsType;
  Float64Array: typeof InstanceofMethod<Float64Array> & IsType;
  BigInt64Array: typeof InstanceofMethod<BigInt64Array> & IsType;
  BigUint64Array: typeof InstanceofMethod<BigUint64Array> & IsType;
  RangeError: typeof InstanceofMethod<RangeError> & IsType;
  Error: typeof InstanceofMethod<Error> & IsType;
  EvalError: typeof InstanceofMethod<EvalError> & IsType;
  ReferenceError: typeof InstanceofMethod<ReferenceError> & IsType;
  SyntaxError: typeof InstanceofMethod<SyntaxError> & IsType;
  TypeError: typeof InstanceofMethod<TypeError> & IsType;
}

export interface HTMLElementsMethodsInterface {
  HTMLAllCollection: typeof InstanceofMethod<HTMLAllCollection> & IsType;
  HTMLAnchorElement: typeof InstanceofMethod<HTMLAnchorElement> & IsType;
  HTMLAreaElement: typeof InstanceofMethod<HTMLAreaElement> & IsType;
  HTMLAudioElement: typeof InstanceofMethod<HTMLAudioElement> & IsType;
  HTMLBRElement: typeof InstanceofMethod<HTMLBRElement> & IsType;
  HTMLBaseElement: typeof InstanceofMethod<HTMLBaseElement> & IsType;
  HTMLBodyElement: typeof InstanceofMethod<HTMLBodyElement> & IsType;
  HTMLButtonElement: typeof InstanceofMethod<HTMLButtonElement> & IsType;
  HTMLCanvasElement: typeof InstanceofMethod<HTMLCanvasElement> & IsType;
  HTMLCollection: typeof InstanceofMethod<HTMLCollection> & IsType;
  HTMLDListElement: typeof InstanceofMethod<HTMLDListElement> & IsType;
  HTMLDataElement: typeof InstanceofMethod<HTMLDataElement> & IsType;
  HTMLDataListElement: typeof InstanceofMethod<HTMLDataListElement> & IsType;
  HTMLDetailsElement: typeof InstanceofMethod<HTMLDetailsElement> & IsType;
  HTMLDialogElement: typeof InstanceofMethod<HTMLDialogElement> & IsType;
  HTMLDivElement: typeof InstanceofMethod<HTMLDivElement> & IsType;
  HTMLElement: typeof InstanceofMethod<HTMLElement> & IsType;
  HTMLEmbedElement: typeof InstanceofMethod<HTMLEmbedElement> & IsType;
  HTMLFieldSetElement: typeof InstanceofMethod<HTMLFieldSetElement> & IsType;
  HTMLFormControlsCollection: typeof InstanceofMethod<HTMLFormControlsCollection> & IsType;
  HTMLFormElement: typeof InstanceofMethod<HTMLFormElement> & IsType;
  HTMLHRElement: typeof InstanceofMethod<HTMLHRElement> & IsType;
  HTMLHeadElement: typeof InstanceofMethod<HTMLHeadElement> & IsType;
  HTMLHeadingElement: typeof InstanceofMethod<HTMLHeadingElement> & IsType;
  HTMLHtmlElement: typeof InstanceofMethod<HTMLHtmlElement> & IsType;
  HTMLIFrameElement: typeof InstanceofMethod<HTMLIFrameElement> & IsType;
  HTMLImageElement: typeof InstanceofMethod<HTMLImageElement> & IsType;
  HTMLInputElement: typeof InstanceofMethod<HTMLInputElement> & IsType;
  HTMLLIElement: typeof InstanceofMethod<HTMLLIElement> & IsType;
  HTMLLabelElement: typeof InstanceofMethod<HTMLLabelElement> & IsType;
  HTMLLegendElement: typeof InstanceofMethod<HTMLLegendElement> & IsType;
  HTMLLinkElement: typeof InstanceofMethod<HTMLLinkElement> & IsType;
  HTMLMapElement: typeof InstanceofMethod<HTMLMapElement> & IsType;
  HTMLMediaElement: typeof InstanceofMethod<HTMLMediaElement> & IsType;
  HTMLMenuElement: typeof InstanceofMethod<HTMLMenuElement> & IsType;
  HTMLMetaElement: typeof InstanceofMethod<HTMLMetaElement> & IsType;
  HTMLMeterElement: typeof InstanceofMethod<HTMLMeterElement> & IsType;
  HTMLModElement: typeof InstanceofMethod<HTMLModElement> & IsType;
  HTMLOListElement: typeof InstanceofMethod<HTMLOListElement> & IsType;
  HTMLObjectElement: typeof InstanceofMethod<HTMLObjectElement> & IsType;
  HTMLOptGroupElement: typeof InstanceofMethod<HTMLOptGroupElement> & IsType;
  HTMLOptionElement: typeof InstanceofMethod<HTMLOptionElement> & IsType;
  HTMLOptionsCollection: typeof InstanceofMethod<HTMLOptionsCollection> & IsType;
  HTMLOutputElement: typeof InstanceofMethod<HTMLOutputElement> & IsType;
  HTMLParagraphElement: typeof InstanceofMethod<HTMLParagraphElement> & IsType;
  HTMLParamElement: typeof InstanceofMethod<HTMLParamElement> & IsType;
  HTMLPictureElement: typeof InstanceofMethod<HTMLPictureElement> & IsType;
  HTMLPreElement: typeof InstanceofMethod<HTMLPreElement> & IsType;
  HTMLProgressElement: typeof InstanceofMethod<HTMLProgressElement> & IsType;
  HTMLQuoteElement: typeof InstanceofMethod<HTMLQuoteElement> & IsType;
  HTMLScriptElement: typeof InstanceofMethod<HTMLScriptElement> & IsType;
  HTMLSelectElement: typeof InstanceofMethod<HTMLSelectElement> & IsType;
  HTMLSlotElement: typeof InstanceofMethod<HTMLSlotElement> & IsType;
  HTMLSourceElement: typeof InstanceofMethod<HTMLSourceElement> & IsType;
  HTMLSpanElement: typeof InstanceofMethod<HTMLSpanElement> & IsType;
  HTMLStyleElement: typeof InstanceofMethod<HTMLStyleElement> & IsType;
  HTMLTableCaptionElement: typeof InstanceofMethod<HTMLTableCaptionElement> & IsType;
  HTMLTableCellElement: typeof InstanceofMethod<HTMLTableCellElement> & IsType;
  HTMLTableColElement: typeof InstanceofMethod<HTMLTableColElement> & IsType;
  HTMLTableElement: typeof InstanceofMethod<HTMLTableElement> & IsType;
  HTMLTableRowElement: typeof InstanceofMethod<HTMLTableRowElement> & IsType;
  HTMLTableSectionElement: typeof InstanceofMethod<HTMLTableSectionElement> & IsType;
  HTMLTemplateElement: typeof InstanceofMethod<HTMLTemplateElement> & IsType;
  HTMLTextAreaElement: typeof InstanceofMethod<HTMLTextAreaElement> & IsType;
  HTMLTimeElement: typeof InstanceofMethod<HTMLTimeElement> & IsType;
  HTMLTitleElement: typeof InstanceofMethod<HTMLTitleElement> & IsType;
  HTMLTrackElement: typeof InstanceofMethod<HTMLTrackElement> & IsType;
  HTMLUListElement: typeof InstanceofMethod<HTMLUListElement> & IsType;
  HTMLUnknownElement: typeof InstanceofMethod<HTMLUnknownElement> & IsType;
  HTMLVideoElement: typeof InstanceofMethod<HTMLVideoElement> & IsType;
}

export interface AllMethodsInterface
  extends BaseMethodsInterface,
    ExternalMethodsInterface,
    HTMLElementsMethodsInterface {}

export interface MethodInterface {
  [key: string]: {
    useCustomMethod: boolean;
    method: any;
  } & ConnectionWrappersInterface &
    AllMethodsInterface &
    ((argument: unknown) => boolean);
}

// @ts-ignore
export const methods: AllMethodsInterface & MethodInterface = {
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

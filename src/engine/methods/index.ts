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

export interface BaseMethodsInterface {
  array: typeof ArrayMethod & AllMethodsInterface;
  bigInt: typeof BigIntMethod & AllMethodsInterface;
  boolean: typeof BooleanMethod & AllMethodsInterface;
  compare: typeof CompareMethod & AllMethodsInterface;
  false: typeof FalseMethod & AllMethodsInterface;
  falsy: typeof FalsyMethod & AllMethodsInterface;
  instanceof: typeof InstanceofMethod & AllMethodsInterface;
  null: typeof NullMethod & AllMethodsInterface;
  function: typeof FunctionMethod & AllMethodsInterface;
  asyncFunction: typeof AsyncFunctionMethod & AllMethodsInterface;
  generatorFunction: typeof GeneratorFunctionMethod & AllMethodsInterface;
  number: typeof NumberMethod & AllMethodsInterface;
  object: typeof ObjectMethod & AllMethodsInterface;
  string: typeof StringMethod & AllMethodsInterface;
  symbol: typeof SymbolMethod & AllMethodsInterface;
  true: typeof TrueMethod & AllMethodsInterface;
  truthy: typeof TruthyMethod & AllMethodsInterface;
  undefined: typeof UndefinedMethod & AllMethodsInterface;
  empty: typeof EmptyMethod & AllMethodsInterface;
  zero: typeof ZeroMethod & AllMethodsInterface;
  primitive: typeof PrimitiveMethod & AllMethodsInterface;
  promise: typeof PromiseMethod & AllMethodsInterface;
}

export interface ExternalMethodsInterface {
  Map: typeof InstanceofMethod<typeof Map> & AllMethodsInterface;
  String: typeof InstanceofMethod<string> & AllMethodsInterface;
  Date: typeof InstanceofMethod<Date> & AllMethodsInterface;
  Set: typeof InstanceofMethod<typeof Set> & AllMethodsInterface;
  URIError: typeof InstanceofMethod<URIError> & AllMethodsInterface;
  RegExp: typeof InstanceofMethod<RegExp> & AllMethodsInterface;
  WeakSet: typeof InstanceofMethod<typeof WeakSet> & AllMethodsInterface;
  WeakMap: typeof InstanceofMethod<typeof WeakMap> & AllMethodsInterface;
  DataView: typeof InstanceofMethod<DataView> & AllMethodsInterface;
  Float32Array: typeof InstanceofMethod<Float32Array> & AllMethodsInterface;
  Int32Array: typeof InstanceofMethod<Int32Array> & AllMethodsInterface;
  Uint8ClampedArray: typeof InstanceofMethod<Uint8ClampedArray> & AllMethodsInterface;
  Int8Array: typeof InstanceofMethod<Int8Array> & AllMethodsInterface;
  Uint8Array: typeof InstanceofMethod<Uint8Array> & AllMethodsInterface;
  Int16Array: typeof InstanceofMethod<Int16Array> & AllMethodsInterface;
  Uint16Array: typeof InstanceofMethod<Uint16Array> & AllMethodsInterface;
  Uint32Array: typeof InstanceofMethod<Uint32Array> & AllMethodsInterface;
  Float64Array: typeof InstanceofMethod<Float64Array> & AllMethodsInterface;
  BigInt64Array: typeof InstanceofMethod<BigInt64Array> & AllMethodsInterface;
  BigUint64Array: typeof InstanceofMethod<BigUint64Array> & AllMethodsInterface;
  RangeError: typeof InstanceofMethod<RangeError> & AllMethodsInterface;
  DOMException: typeof InstanceofMethod<DOMException> & AllMethodsInterface;
  Error: typeof InstanceofMethod<Error> & AllMethodsInterface;
  EvalError: typeof InstanceofMethod<EvalError> & AllMethodsInterface;
  ReferenceError: typeof InstanceofMethod<ReferenceError> & AllMethodsInterface;
  SyntaxError: typeof InstanceofMethod<SyntaxError> & AllMethodsInterface;
  TypeError: typeof InstanceofMethod<TypeError> & AllMethodsInterface;
}

export interface HTMLElementsMethodsInterface {
  HTMLAllCollection: typeof InstanceofMethod<HTMLAllCollection> & AllMethodsInterface;
  HTMLAnchorElement: typeof InstanceofMethod<HTMLAnchorElement> & AllMethodsInterface;
  HTMLAreaElement: typeof InstanceofMethod<HTMLAreaElement> & AllMethodsInterface;
  HTMLAudioElement: typeof InstanceofMethod<HTMLAudioElement> & AllMethodsInterface;
  HTMLBRElement: typeof InstanceofMethod<HTMLBRElement> & AllMethodsInterface;
  HTMLBaseElement: typeof InstanceofMethod<HTMLBaseElement> & AllMethodsInterface;
  HTMLBodyElement: typeof InstanceofMethod<HTMLBodyElement> & AllMethodsInterface;
  HTMLButtonElement: typeof InstanceofMethod<HTMLButtonElement> & AllMethodsInterface;
  HTMLCanvasElement: typeof InstanceofMethod<HTMLCanvasElement> & AllMethodsInterface;
  HTMLCollection: typeof InstanceofMethod<HTMLCollection> & AllMethodsInterface;
  HTMLDListElement: typeof InstanceofMethod<HTMLDListElement> & AllMethodsInterface;
  HTMLDataElement: typeof InstanceofMethod<HTMLDataElement> & AllMethodsInterface;
  HTMLDataListElement: typeof InstanceofMethod<HTMLDataListElement> & AllMethodsInterface;
  HTMLDetailsElement: typeof InstanceofMethod<HTMLDetailsElement> & AllMethodsInterface;
  HTMLDialogElement: typeof InstanceofMethod<HTMLDialogElement> & AllMethodsInterface;
  HTMLDivElement: typeof InstanceofMethod<HTMLDivElement> & AllMethodsInterface;
  HTMLElement: typeof InstanceofMethod<HTMLElement> & AllMethodsInterface;
  HTMLEmbedElement: typeof InstanceofMethod<HTMLEmbedElement> & AllMethodsInterface;
  HTMLFieldSetElement: typeof InstanceofMethod<HTMLFieldSetElement> & AllMethodsInterface;
  HTMLFormControlsCollection: typeof InstanceofMethod<HTMLFormControlsCollection> & AllMethodsInterface;
  HTMLFormElement: typeof InstanceofMethod<HTMLFormElement> & AllMethodsInterface;
  HTMLHRElement: typeof InstanceofMethod<HTMLHRElement> & AllMethodsInterface;
  HTMLHeadElement: typeof InstanceofMethod<HTMLHeadElement> & AllMethodsInterface;
  HTMLHeadingElement: typeof InstanceofMethod<HTMLHeadingElement> & AllMethodsInterface;
  HTMLHtmlElement: typeof InstanceofMethod<HTMLHtmlElement> & AllMethodsInterface;
  HTMLIFrameElement: typeof InstanceofMethod<HTMLIFrameElement> & AllMethodsInterface;
  HTMLImageElement: typeof InstanceofMethod<HTMLImageElement> & AllMethodsInterface;
  HTMLInputElement: typeof InstanceofMethod<HTMLInputElement> & AllMethodsInterface;
  HTMLLIElement: typeof InstanceofMethod<HTMLLIElement> & AllMethodsInterface;
  HTMLLabelElement: typeof InstanceofMethod<HTMLLabelElement> & AllMethodsInterface;
  HTMLLegendElement: typeof InstanceofMethod<HTMLLegendElement> & AllMethodsInterface;
  HTMLLinkElement: typeof InstanceofMethod<HTMLLinkElement> & AllMethodsInterface;
  HTMLMapElement: typeof InstanceofMethod<HTMLMapElement> & AllMethodsInterface;
  HTMLMediaElement: typeof InstanceofMethod<HTMLMediaElement> & AllMethodsInterface;
  HTMLMenuElement: typeof InstanceofMethod<HTMLMenuElement> & AllMethodsInterface;
  HTMLMetaElement: typeof InstanceofMethod<HTMLMetaElement> & AllMethodsInterface;
  HTMLMeterElement: typeof InstanceofMethod<HTMLMeterElement> & AllMethodsInterface;
  HTMLModElement: typeof InstanceofMethod<HTMLModElement> & AllMethodsInterface;
  HTMLOListElement: typeof InstanceofMethod<HTMLOListElement> & AllMethodsInterface;
  HTMLObjectElement: typeof InstanceofMethod<HTMLObjectElement> & AllMethodsInterface;
  HTMLOptGroupElement: typeof InstanceofMethod<HTMLOptGroupElement> & AllMethodsInterface;
  HTMLOptionElement: typeof InstanceofMethod<HTMLOptionElement> & AllMethodsInterface;
  HTMLOptionsCollection: typeof InstanceofMethod<HTMLOptionsCollection> & AllMethodsInterface;
  HTMLOutputElement: typeof InstanceofMethod<HTMLOutputElement> & AllMethodsInterface;
  HTMLParagraphElement: typeof InstanceofMethod<HTMLParagraphElement> & AllMethodsInterface;
  HTMLPictureElement: typeof InstanceofMethod<HTMLPictureElement> & AllMethodsInterface;
  HTMLPreElement: typeof InstanceofMethod<HTMLPreElement> & AllMethodsInterface;
  HTMLProgressElement: typeof InstanceofMethod<HTMLProgressElement> & AllMethodsInterface;
  HTMLQuoteElement: typeof InstanceofMethod<HTMLQuoteElement> & AllMethodsInterface;
  HTMLScriptElement: typeof InstanceofMethod<HTMLScriptElement> & AllMethodsInterface;
  HTMLSelectElement: typeof InstanceofMethod<HTMLSelectElement> & AllMethodsInterface;
  HTMLSlotElement: typeof InstanceofMethod<HTMLSlotElement> & AllMethodsInterface;
  HTMLSourceElement: typeof InstanceofMethod<HTMLSourceElement> & AllMethodsInterface;
  HTMLSpanElement: typeof InstanceofMethod<HTMLSpanElement> & AllMethodsInterface;
  HTMLStyleElement: typeof InstanceofMethod<HTMLStyleElement> & AllMethodsInterface;
  HTMLTableCaptionElement: typeof InstanceofMethod<HTMLTableCaptionElement> & AllMethodsInterface;
  HTMLTableCellElement: typeof InstanceofMethod<HTMLTableCellElement> & AllMethodsInterface;
  HTMLTableColElement: typeof InstanceofMethod<HTMLTableColElement> & AllMethodsInterface;
  HTMLTableElement: typeof InstanceofMethod<HTMLTableElement> & AllMethodsInterface;
  HTMLTableRowElement: typeof InstanceofMethod<HTMLTableRowElement> & AllMethodsInterface;
  HTMLTableSectionElement: typeof InstanceofMethod<HTMLTableSectionElement> & AllMethodsInterface;
  HTMLTemplateElement: typeof InstanceofMethod<HTMLTemplateElement> & AllMethodsInterface;
  HTMLTextAreaElement: typeof InstanceofMethod<HTMLTextAreaElement> & AllMethodsInterface;
  HTMLTimeElement: typeof InstanceofMethod<HTMLTimeElement> & AllMethodsInterface;
  HTMLTitleElement: typeof InstanceofMethod<HTMLTitleElement> & AllMethodsInterface;
  HTMLTrackElement: typeof InstanceofMethod<HTMLTrackElement> & AllMethodsInterface;
  HTMLUListElement: typeof InstanceofMethod<HTMLUListElement> & AllMethodsInterface;
  HTMLUnknownElement: typeof InstanceofMethod<HTMLUnknownElement> & AllMethodsInterface;
  HTMLVideoElement: typeof InstanceofMethod<HTMLVideoElement> & AllMethodsInterface;
}

export interface AllMethodsInterface
  extends BaseMethodsInterface,
    ExternalMethodsInterface,
    HTMLElementsMethodsInterface {
  // @ts-ignore
  or: AllMethodsInterface;
  // @ts-ignore
  not: AllMethodsInterface;

  // @ts-ignore
  [key: string]: ((argument: unknown) => unknown) & AllMethodsInterface;
}

// @ts-ignore
export const methods: AllMethodsInterface = {
  array: ArrayMethod as any,
  bigInt: BigIntMethod as any,
  boolean: BooleanMethod as any,
  compare: CompareMethod as any,
  empty: EmptyMethod as any,
  false: FalseMethod as any,
  falsy: FalsyMethod as any,
  instanceof: InstanceofMethod as any,
  function: FunctionMethod as any,
  asyncFunction: AsyncFunctionMethod as any,
  generatorFunction: GeneratorFunctionMethod as any,
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

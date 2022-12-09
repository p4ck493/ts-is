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

type instanceofType<T> = (argument: unknown) => argument is T;

export interface HTMLElementsMethodsInterface {
  HTMLAllCollection: instanceofType<HTMLAllCollection> & AllMethodsInterface;
  HTMLAnchorElement: instanceofType<HTMLAnchorElement> & AllMethodsInterface;
  HTMLAreaElement: instanceofType<HTMLAreaElement> & AllMethodsInterface;
  HTMLAudioElement: instanceofType<HTMLAudioElement> & AllMethodsInterface;
  HTMLBRElement: instanceofType<HTMLBRElement> & AllMethodsInterface;
  HTMLBaseElement: instanceofType<HTMLBaseElement> & AllMethodsInterface;
  HTMLBodyElement: instanceofType<HTMLBodyElement> & AllMethodsInterface;
  HTMLButtonElement: instanceofType<HTMLButtonElement> & AllMethodsInterface;
  HTMLCanvasElement: instanceofType<HTMLCanvasElement> & AllMethodsInterface;
  HTMLCollection: instanceofType<HTMLCollection> & AllMethodsInterface;
  HTMLDListElement: instanceofType<HTMLDListElement> & AllMethodsInterface;
  HTMLDataElement: instanceofType<HTMLDataElement> & AllMethodsInterface;
  HTMLDataListElement: instanceofType<HTMLDataListElement> & AllMethodsInterface;
  HTMLDetailsElement: instanceofType<HTMLDetailsElement> & AllMethodsInterface;
  HTMLDialogElement: instanceofType<HTMLDialogElement> & AllMethodsInterface;
  HTMLDivElement: instanceofType<HTMLDivElement> & AllMethodsInterface;
  HTMLElement: instanceofType<HTMLElement> & AllMethodsInterface;
  HTMLEmbedElement: instanceofType<HTMLEmbedElement> & AllMethodsInterface;
  HTMLFieldSetElement: instanceofType<HTMLFieldSetElement> & AllMethodsInterface;
  HTMLFormControlsCollection: instanceofType<HTMLFormControlsCollection> & AllMethodsInterface;
  HTMLFormElement: instanceofType<HTMLFormElement> & AllMethodsInterface;
  HTMLHRElement: instanceofType<HTMLHRElement> & AllMethodsInterface;
  HTMLHeadElement: instanceofType<HTMLHeadElement> & AllMethodsInterface;
  HTMLHeadingElement: instanceofType<HTMLHeadingElement> & AllMethodsInterface;
  HTMLHtmlElement: instanceofType<HTMLHtmlElement> & AllMethodsInterface;
  HTMLIFrameElement: instanceofType<HTMLIFrameElement> & AllMethodsInterface;
  HTMLImageElement: instanceofType<HTMLImageElement> & AllMethodsInterface;
  HTMLInputElement: instanceofType<HTMLInputElement> & AllMethodsInterface;
  HTMLLIElement: instanceofType<HTMLLIElement> & AllMethodsInterface;
  HTMLLabelElement: instanceofType<HTMLLabelElement> & AllMethodsInterface;
  HTMLLegendElement: instanceofType<HTMLLegendElement> & AllMethodsInterface;
  HTMLLinkElement: instanceofType<HTMLLinkElement> & AllMethodsInterface;
  HTMLMapElement: instanceofType<HTMLMapElement> & AllMethodsInterface;
  HTMLMediaElement: instanceofType<HTMLMediaElement> & AllMethodsInterface;
  HTMLMenuElement: instanceofType<HTMLMenuElement> & AllMethodsInterface;
  HTMLMetaElement: instanceofType<HTMLMetaElement> & AllMethodsInterface;
  HTMLMeterElement: instanceofType<HTMLMeterElement> & AllMethodsInterface;
  HTMLModElement: instanceofType<HTMLModElement> & AllMethodsInterface;
  HTMLOListElement: instanceofType<HTMLOListElement> & AllMethodsInterface;
  HTMLObjectElement: instanceofType<HTMLObjectElement> & AllMethodsInterface;
  HTMLOptGroupElement: instanceofType<HTMLOptGroupElement> & AllMethodsInterface;
  HTMLOptionElement: instanceofType<HTMLOptionElement> & AllMethodsInterface;
  HTMLOptionsCollection: instanceofType<HTMLOptionsCollection> & AllMethodsInterface;
  HTMLOutputElement: instanceofType<HTMLOutputElement> & AllMethodsInterface;
  HTMLParagraphElement: instanceofType<HTMLParagraphElement> & AllMethodsInterface;
  HTMLPictureElement: instanceofType<HTMLPictureElement> & AllMethodsInterface;
  HTMLPreElement: instanceofType<HTMLPreElement> & AllMethodsInterface;
  HTMLProgressElement: instanceofType<HTMLProgressElement> & AllMethodsInterface;
  HTMLQuoteElement: instanceofType<HTMLQuoteElement> & AllMethodsInterface;
  HTMLScriptElement: instanceofType<HTMLScriptElement> & AllMethodsInterface;
  HTMLSelectElement: instanceofType<HTMLSelectElement> & AllMethodsInterface;
  HTMLSlotElement: instanceofType<HTMLSlotElement> & AllMethodsInterface;
  HTMLSourceElement: instanceofType<HTMLSourceElement> & AllMethodsInterface;
  HTMLSpanElement: instanceofType<HTMLSpanElement> & AllMethodsInterface;
  HTMLStyleElement: instanceofType<HTMLStyleElement> & AllMethodsInterface;
  HTMLTableCaptionElement: instanceofType<HTMLTableCaptionElement> & AllMethodsInterface;
  HTMLTableCellElement: instanceofType<HTMLTableCellElement> & AllMethodsInterface;
  HTMLTableColElement: instanceofType<HTMLTableColElement> & AllMethodsInterface;
  HTMLTableElement: instanceofType<HTMLTableElement> & AllMethodsInterface;
  HTMLTableRowElement: instanceofType<HTMLTableRowElement> & AllMethodsInterface;
  HTMLTableSectionElement: instanceofType<HTMLTableSectionElement> & AllMethodsInterface;
  HTMLTemplateElement: instanceofType<HTMLTemplateElement> & AllMethodsInterface;
  HTMLTextAreaElement: instanceofType<HTMLTextAreaElement> & AllMethodsInterface;
  HTMLTimeElement: instanceofType<HTMLTimeElement> & AllMethodsInterface;
  HTMLTitleElement: instanceofType<HTMLTitleElement> & AllMethodsInterface;
  HTMLTrackElement: instanceofType<HTMLTrackElement> & AllMethodsInterface;
  HTMLUListElement: instanceofType<HTMLUListElement> & AllMethodsInterface;
  HTMLUnknownElement: instanceofType<HTMLUnknownElement> & AllMethodsInterface;
  HTMLVideoElement: instanceofType<HTMLVideoElement> & AllMethodsInterface;
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


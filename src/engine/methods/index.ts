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

type mixTypes<T> = T & AllMethodsInterface;

export interface BaseMethodsInterface {
  array: mixTypes<typeof ArrayMethod>;
  bigInt: mixTypes<typeof BigIntMethod>;
  boolean: mixTypes<typeof BooleanMethod>;
  compare: mixTypes<typeof CompareMethod>;
  false: mixTypes<typeof FalseMethod>;
  falsy: mixTypes<typeof FalsyMethod>;
  instanceof: mixTypes<typeof InstanceofMethod>;
  null: mixTypes<typeof NullMethod>;
  function: mixTypes<typeof FunctionMethod>;
  asyncFunction: mixTypes<typeof AsyncFunctionMethod>;
  generatorFunction: mixTypes<typeof GeneratorFunctionMethod>;
  number: mixTypes<typeof NumberMethod>;
  object: mixTypes<typeof ObjectMethod>;
  string: mixTypes<typeof StringMethod>;
  symbol: mixTypes<typeof SymbolMethod>;
  true: mixTypes<typeof TrueMethod>;
  truthy: mixTypes<typeof TruthyMethod>;
  undefined: mixTypes<typeof UndefinedMethod>;
  empty: mixTypes<typeof EmptyMethod>;
  zero: mixTypes<typeof ZeroMethod>;
  primitive: mixTypes<typeof PrimitiveMethod>;
  promise: mixTypes<typeof PromiseMethod>;
}

type instanceofType<T> = (argument: unknown) => argument is T;
type instanceofTypeMix<T> = mixTypes<instanceofType<T>>;

export interface ExternalMethodsInterface {
  Map: instanceofTypeMix<typeof Map>;
  String: instanceofTypeMix<string>;
  Date: instanceofTypeMix<Date>;
  Set: instanceofTypeMix<typeof Set>;
  URIError: instanceofTypeMix<URIError>;
  RegExp: instanceofTypeMix<RegExp>;
  WeakSet: instanceofTypeMix<typeof WeakSet>;
  WeakMap: instanceofTypeMix<typeof WeakMap>;
  DataView: instanceofTypeMix<DataView>;
  Float32Array: instanceofTypeMix<Float32Array>;
  Int32Array: instanceofTypeMix<Int32Array>;
  Uint8ClampedArray: instanceofTypeMix<Uint8ClampedArray>;
  Int8Array: instanceofTypeMix<Int8Array>;
  Uint8Array: instanceofTypeMix<Uint8Array>;
  Int16Array: instanceofTypeMix<Int16Array>;
  Uint16Array: instanceofTypeMix<Uint16Array>;
  Uint32Array: instanceofTypeMix<Uint32Array>;
  Float64Array: instanceofTypeMix<Float64Array>;
  BigInt64Array: instanceofTypeMix<BigInt64Array>;
  BigUint64Array: instanceofTypeMix<BigUint64Array>;
  RangeError: instanceofTypeMix<RangeError>;
  DOMException: instanceofTypeMix<DOMException>;
  Error: instanceofTypeMix<Error>;
  EvalError: instanceofTypeMix<EvalError>;
  ReferenceError: instanceofTypeMix<ReferenceError>;
  SyntaxError: instanceofTypeMix<SyntaxError>;
  TypeError: instanceofTypeMix<TypeError>;
  Function: instanceofTypeMix<Function>;
}

export interface HTMLElementsMethodsInterface {
  HTMLAllCollection: instanceofTypeMix<HTMLAllCollection>;
  HTMLAnchorElement: instanceofTypeMix<HTMLAnchorElement>;
  HTMLAreaElement: instanceofTypeMix<HTMLAreaElement>;
  HTMLAudioElement: instanceofTypeMix<HTMLAudioElement>;
  HTMLBRElement: instanceofTypeMix<HTMLBRElement>;
  HTMLBaseElement: instanceofTypeMix<HTMLBaseElement>;
  HTMLBodyElement: instanceofTypeMix<HTMLBodyElement>;
  HTMLButtonElement: instanceofTypeMix<HTMLButtonElement>;
  HTMLCanvasElement: instanceofTypeMix<HTMLCanvasElement>;
  HTMLCollection: instanceofTypeMix<HTMLCollection>;
  HTMLDListElement: instanceofTypeMix<HTMLDListElement>;
  HTMLDataElement: instanceofTypeMix<HTMLDataElement>;
  HTMLDataListElement: instanceofTypeMix<HTMLDataListElement>;
  HTMLDetailsElement: instanceofTypeMix<HTMLDetailsElement>;
  HTMLDialogElement: instanceofTypeMix<HTMLDialogElement>;
  HTMLDivElement: instanceofTypeMix<HTMLDivElement>;
  HTMLElement: instanceofTypeMix<HTMLElement>;
  HTMLEmbedElement: instanceofTypeMix<HTMLEmbedElement>;
  HTMLFieldSetElement: instanceofTypeMix<HTMLFieldSetElement>;
  HTMLFormControlsCollection: instanceofTypeMix<HTMLFormControlsCollection>;
  HTMLFormElement: instanceofTypeMix<HTMLFormElement>;
  HTMLHRElement: instanceofTypeMix<HTMLHRElement>;
  HTMLHeadElement: instanceofTypeMix<HTMLHeadElement>;
  HTMLHeadingElement: instanceofTypeMix<HTMLHeadingElement>;
  HTMLHtmlElement: instanceofTypeMix<HTMLHtmlElement>;
  HTMLIFrameElement: instanceofTypeMix<HTMLIFrameElement>;
  HTMLImageElement: instanceofTypeMix<HTMLImageElement>;
  HTMLInputElement: instanceofTypeMix<HTMLInputElement>;
  HTMLLIElement: instanceofTypeMix<HTMLLIElement>;
  HTMLLabelElement: instanceofTypeMix<HTMLLabelElement>;
  HTMLLegendElement: instanceofTypeMix<HTMLLegendElement>;
  HTMLLinkElement: instanceofTypeMix<HTMLLinkElement>;
  HTMLMapElement: instanceofTypeMix<HTMLMapElement>;
  HTMLMediaElement: instanceofTypeMix<HTMLMediaElement>;
  HTMLMenuElement: instanceofTypeMix<HTMLMenuElement>;
  HTMLMetaElement: instanceofTypeMix<HTMLMetaElement>;
  HTMLMeterElement: instanceofTypeMix<HTMLMeterElement>;
  HTMLModElement: instanceofTypeMix<HTMLModElement>;
  HTMLOListElement: instanceofTypeMix<HTMLOListElement>;
  HTMLObjectElement: instanceofTypeMix<HTMLObjectElement>;
  HTMLOptGroupElement: instanceofTypeMix<HTMLOptGroupElement>;
  HTMLOptionElement: instanceofTypeMix<HTMLOptionElement>;
  HTMLOptionsCollection: instanceofTypeMix<HTMLOptionsCollection>;
  HTMLOutputElement: instanceofTypeMix<HTMLOutputElement>;
  HTMLParagraphElement: instanceofTypeMix<HTMLParagraphElement>;
  HTMLPictureElement: instanceofTypeMix<HTMLPictureElement>;
  HTMLPreElement: instanceofTypeMix<HTMLPreElement>;
  HTMLProgressElement: instanceofTypeMix<HTMLProgressElement>;
  HTMLQuoteElement: instanceofTypeMix<HTMLQuoteElement>;
  HTMLScriptElement: instanceofTypeMix<HTMLScriptElement>;
  HTMLSelectElement: instanceofTypeMix<HTMLSelectElement>;
  HTMLSlotElement: instanceofTypeMix<HTMLSlotElement>;
  HTMLSourceElement: instanceofTypeMix<HTMLSourceElement>;
  HTMLSpanElement: instanceofTypeMix<HTMLSpanElement>;
  HTMLStyleElement: instanceofTypeMix<HTMLStyleElement>;
  HTMLTableCaptionElement: instanceofTypeMix<HTMLTableCaptionElement>;
  HTMLTableCellElement: instanceofTypeMix<HTMLTableCellElement>;
  HTMLTableColElement: instanceofTypeMix<HTMLTableColElement>;
  HTMLTableElement: instanceofTypeMix<HTMLTableElement>;
  HTMLTableRowElement: instanceofTypeMix<HTMLTableRowElement>;
  HTMLTableSectionElement: instanceofTypeMix<HTMLTableSectionElement>;
  HTMLTemplateElement: instanceofTypeMix<HTMLTemplateElement>;
  HTMLTextAreaElement: instanceofTypeMix<HTMLTextAreaElement>;
  HTMLTimeElement: instanceofTypeMix<HTMLTimeElement>;
  HTMLTitleElement: instanceofTypeMix<HTMLTitleElement>;
  HTMLTrackElement: instanceofTypeMix<HTMLTrackElement>;
  HTMLUListElement: instanceofTypeMix<HTMLUListElement>;
  HTMLUnknownElement: instanceofTypeMix<HTMLUnknownElement>;
  HTMLVideoElement: instanceofTypeMix<HTMLVideoElement>;
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


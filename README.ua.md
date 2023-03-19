# ts-is
![NPM Latest Version](https://img.shields.io/npm/v/@p4ck493/ts-is)
![Downloads Count](https://img.shields.io/npm/dm/@p4ck493/ts-is.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=@p4ck493/ts-is)
![Stars](https://img.shields.io/github/stars/p4ck493/ts-is)

## 🌍 Мови
> 🇺🇦 [українська](https://github.com/p4ck493/ts-is/blob/main/README.ua.md) | 🇬🇧 [english](https://github.com/p4ck493/ts-is/blob/main/README.md)


## 💡 Ідея

Цей пакет був створений для того, щоб спростити написання в typescript / javascript код для перевірки даних, часто буває так що Вам необхідно мати
перевірку для різних типів даних, ці перевірки можуть бути «величезними», але якби Ви могли просто описати словами що хочете перевірити?

Наприклад, навіщо писати щось таке:

```typescript
if (
    typeof variable === 'object' &&
    variable !== null &&
    !Array.isArray(variable) &&
    Object.keys(variable)?.length
) {
}
```

Якщо Ви можете завдяки цьому пакунку написати щось таке:

```typescript
if (is.object.not.empty(variable)) {
}
```

## Вступ

### Чому варто використовувати та підтримувати пакунок:
1. ✅ **946** задекларованих метод.
2. ✅ Типізація.
3. ✅ Зменшення коду в проєкті.
4. ✅ Легше читати та розуміти код.
5. ✅ Підтримка CDN.
6. ✅ Сумісний із найстарішою версією JavaScript (es3 - EcmaScript 1999).
7. ✅ Сумісний із найстарішою версією TypeScript (0.8.0).
8. ✅ Обслуговування глобальних контекстів: globalThis, window, self, global.
9. ✅ No dependencies
10. ✅ AMD, Node & browser ready
11. ✅ Малий розмір: ~3 КБ.
    1. Розмір пакунка для створення робочої версії становить приблизно **3 КБ**, а якщо ви використовуєте **CDN** у цьому випадку, він становить приблизно **5 КБ**

## 📝 Зміст

- [ts-is](#ts-is)
    - [Ідея](#-ідея)
    - [Вступ](#вступ)
    - [Зміст](#-зміст)
    - [Інсталювання](#-інсталювання)
    - [CDN](#-cdn)
    - [Використання](#-використання)
        - [Приклади](#приклади)
            - [syntax](#syntax)
            - [Методи](#методи)
            - [Методи разом з конекторами](#методи-разом-з-конекторами)
            - [Методи з обгортками](#методи-з-обгортками)
            - [Методи разом з Вашими задекларованими через декоратор моделями](#методи-разом-з-вашими-задекларованими-через-декоратор-моделями)
            - [Власні методи](#власні-методи)
        - [Випадки користування](#випадки-користування)
          - [array:filter](#array--filter)
          - [array:some](#array--some)
          - [array:every](#array--every)
          - [observable:pipe:filter](#observable--pipe--filter)
    - [API](#-api)
    - [Методи які доступні через пакунок, але які лише задекларовані в пакунку, але насправді беруть дані поза пакунком.](#методи-які-доступні-через-пакунок-але-які-лише-задекларовані-в-пакунку-але-насправді-беруть-дані-поза-пакунком)
      - [Загальні (841 метод)](#загальні--841-)
      - [HTML (80 методів)](#html--80-)
  - [Додаткове](#-додаткове)
    - [Сприяння](#-сприяння)
    - [Автори](#-автори)
    - [Ліцензія](#-ліцензія)

## 💿 Інсталювання

```sh
npm install @p4ck493/ts-is
```

## 🔗 CDN
```html
<script>var exports = {};</script>
<script src="//unpkg.com/@p4ck493/ts-is@3.0.8/dist/index.js"></script>
<script>
  const {is} = exports;
  console.log(is.string('')); // true
</script>
```

[Повернутись до змісту](#-зміст)

## 🙌 Використання
```sh
import {is} from "@p4ck493/ts-is";
```

### Приклади

#### Syntax

```typescript

$method = 'ANY_METHOD_NAME';

is[$method]();
is[$method][$method]();
is[$method].or[$method]();
is[$method].not[$method]();

$model = 'ANY_MODEL_WICH_DECLARE_IN_PACKAGE_BY_DECORATOR'; // Decorator: @RegisterInIs()

is[$model]();
is[$model][$model]();
is[$model].or[$model]();
is[$model].not[$model]();

// And yes, you can mix:

is[$cmd][$model]();
is[$model].or[$cmd]();
is[$cmd].not[$model]();

```

#### Методи

```typescript
is.array([]) // true

is.bigInt(1n) // true

is.boolean(false) // true

is.compare({a: 1}, {a: 1}) // true
is.compare({a: 1}, {}) // false
is.compare({}, {a: 1}) // false
is.compare({}, {}) // true

is.Date(new Date()) // true

is.empty('') // true
is.empty(' ') // true
is.empty(new Map()) // true
is.empty({}) // true
is.empty([]) // true

is.Error(new Error()) // true

is.EvalError(new EvalError()) // true

is.false(false) // true

is.DataView(new DataView(new ArrayBuffer(16), 0)) // true

is.falsy('') // true 

// Цей метод перевірить чи аргумент є рівний з базовим типом: Функція
is.Function((() => {
})) // true

// Ця метода перевіряє не лише чи аргумент є функцією, а також чи аргумент є ансихранічною функцією або генеративною 
is.function((() => {
})) // true

is.instanceof((new Boolean(false)), Boolean) // true

is.Map(new Map()) // true

is.null(null) // true

is.number(0) // true

is.object({}) // true

is.ReferenceError(new ReferenceError()) // true

is.RegExp(new RegExp()) // true

is.Set(new Set()) // true

is.string('') // true

is.symbol(Symbol()) // true

is.SyntaxError(new SyntaxError()) // true

is.true(true) // true

is.truthy(1) // true

is.TypeError(new TypeError()) // true

is.undefined(undefined) // true

is.URIError(new URIError()) // true

is.WeakMap(new WeakMap()) // true

is.WeakSet(new WeakSet()) // true

```

#### Методи разом з конекторами

```typescript
is.array.empty([]) // true

is.bigInt.or.number(-1) // true

is.boolean.or.truthy('false') // true

is.false.or.falsy('') // true 

is.null.or.undefined(null) // true

is.object.or.Function({}) // true
is.object.or.function({}) // true

is.string.or.true.or.symbol(true) // true
```

#### Методи з обгортками

```typescript
is.object.not.empty({a: 1}) // true

is.not.object({}) // false

is.not.number(1n) // true

```

[Повернутись до змісту](#-зміст)

#### Методи разом з Вашими задекларованими через декоратор моделями

> У Вас є можливість реєструвати власні класи до пакунку щоб в подальшому їх використовувати.

```typescript
@RegisterInIs({
    className: 'person' // You can customize the model name, i.e.: is.person((new Person())) // true
})
class PersonModel {

}

@RegisterInIs({
    className: 'woman'
})
class WomanModel extends PersonModel {

}

@RegisterInIs({
    className: 'man'
})
class ManModel extends PersonModel {

}

@RegisterInIs()
class AddressModel {

}

const person = new PersonModel();
const man = new ManModel();
const woman = new WomanModel();
const address = new AddressModel();

is.person(person) // true

is.person(man) // true

is.person(woman) // true

is.person(address) // false

is.AddressModel(address) // true

is.woman.or.man(woman) // true

is.not.woman(man) // true

is.not.man(man) // false

```

##### CDN

```javascript

const {RegisterInIs} = exports;

// Person
class PersonModel {
    // Your code ...
}
RegisterInIs()(PersonModel);

// Woman
class WomanModel extends PersonModel {
    // Your code ...
}
RegisterInIs({
    className: 'woman'
})(WomanModel);

// Declare
const person = new PersonModel();
const woman = new WomanModel();

// Check
is.PersonModel(person) // true
is.PersonModel(woman) // true
is.woman(woman) // true
is.woman(person) // false


// Good Example: Cart

@RegisterInIs()
class Cart {
    public size: number = 0;
}

const cart: Cart = new Cart();
is.Cart.empty(cart) // true
cart.size = 1;
is.Cart.empty(cart) // false



// Bad Example: Cart

@RegisterInIs()
class CartTwo {
    public total: number = 0;
}

const cartTwo: CartTwo = new CartTwo();
is.CartTwo.empty(cartTwo) // false
cartTwo.size = 1;
is.CartTwo.empty(cartTwo) // false

```

#### Власні методи

```typescript
@RegisterInIs({
    customMethod: 'customNameOfMethod'
})
class PostModel {
    public static customNameOfMethod(argument: unknown): argument is PostModel {
        return `Hello ${argument}`;
    }
}

is.PostModel('world') // Returns: Hello world

```

[Повернутись до змісту](#-зміст)

### Випадки користування

#### array:filter
```typescript

const onlyNumbers: number[] = [0, 1, '', 'test'];
console.log(onlyNumbers.filter(is.number)) // [0, 1]

const onlyStringList: string[] = [0, 1, '', 'test'];
console.log(onlyStringList.filter(is.string)); // ['', 'test']

const onlyNotEmptyStringList: string[] = [0, 1, '', 'test'];
console.log(onlyNotEmptyStringList.filter(is.string.not.empty)); // ['test']

```

#### array:some
```typescript

const onlyNumbers: number[] = [0, 1, '', 'test'];
console.log(onlyNumbers.some(is.string.or.object)) // true

const onlyStringList: string[] = [0, 1, '', 'test'];
console.log(onlyStringList.some(is.not.symbol)); // false

const onlyNotEmptyStringList: string[] = [0, 1, '', 'test'];
console.log(onlyNotEmptyStringList.some(is.string.empty)); // true

```

#### array:every
```typescript

const onlyNumbers: number[] = [0, 1, '', 'test'];
console.log(onlyNumbers.every(is.string.or.number)) // true

const onlyStringList: string[] = [0, 1, '', 'test'];
console.log(onlyStringList.every(is.string)); // false

const onlyNotEmptyStringList: string[] = [0, 1, '', 'test'];
console.log(onlyNotEmptyStringList.every(is.not.object)); // true

```

#### observable:pipe:filter
```typescript

const stream$: Stream<boolean> = new Stream<boolean>();

stream$.pipe(filter(is.boolean)).subscribe(console.log) // true, false

stream$.next([false]); // Bad
stream$.next(0); // Bad

stream$.next(true); // Good

stream$.next({false: false}); // Bad

stream$.next(false); // Good

stream$.next(1); // Bad
stream$.next('false'); // Bad

```

[Повернутись до змісту](#-зміст)

## 🗃️ API

### Всі методи повертають логічну вартість, тобто: true, false;

### Список методів які представлені в пакунку.

| Name              | Tests | Status   | New name | Comment                                                                                                |
|-------------------|-------|----------|----------|--------------------------------------------------------------------------------------------------------|
| array             | ✅     |||
| bigInt            | ✅     |||
| boolean           | ✅     |||
| compare           | ✅     |||
| empty             | ✅     |||
| even              | ✅🆕   |          |          |
| false             | ✅     |||
| falsy             | ✅     |||
| function          | ✅     | RETURNED |          | якщо потрібно перевірити, чи є щось із пакета функцією, використовуйте is.Function замість is.function |
| asyncFunction     | ➖     ||
| generatorFunction | ➖     ||
| instanceof        | ✅     |||
| ipv4              | ✅🆕   |          |          |
| ipv6              | ✅🆕   |          |          |
| macAddress        | ✅🆕   |          |          |
| null              | ✅     |||
| number            | ✅     |||
| object            | ✅     |||
| odd               | ✅🆕   |          |          |
| string            | ✅     |||
| symbol            | ✅     |||
| infinity          | ✅     |||
| true              | ✅     |||
| truthy            | ✅     |||
| undefined         | ✅     |||
| NaN               | ➖     | DELETED  | isNaN()  |
| zero              | ✅     |||
| word              | ✅     |          |          |
| positive          | ✅     |          |          | Перевірте, якщо число більше 0                                                                         |
| negative          | ✅     |          |          | Перевірте, якщо число менше 0                                                                          |
| primitive         | ✅     |          |          | string, number, NaN, bigint, boolean, undefined, symbol, null                                          |
| promise           | ➖     |||

> Назва - назва методи яку можете використовувати для виклику, щоб перевірити певні види даних.

> Тести - відмічаємо статус чи в проєкті були написати тести для перевірки цієї методи.

> Статус - повідомляємо що методі видалена, але якщо тести помічені що ОК, то значить що цей метод доступний, але має іншу назву і тести теж написані.

> Нова назва - інформує що тепер ця метода має нову назву.

### Список доступних методів які мають іншу роль

| Name | Tests | Status  |
|------|------|---------|
| not  | ✅    |
| or   | ✅    |
| all  | ➖   | DELETED |


### Методи які доступні через пакунок, але які лише задекларовані в пакунку, але насправді беруть дані поза пакунком.

#### Загальні (841)

| Name                                  | Tests |
|---------------------------------------|-------|
| Map                                   | ✅     |
| String                                | ➖     |
| Date                                  | ✅     |
| Set                                   | ✅     |
| URIError                              | ✅     |
| RegExp                                | ✅     |
| WeakSet                               | ✅     |
| WeakMap                               | ✅     |
| DataView                              | ✅     |
| Float32Array                          | ➖     |
| Int32Array                            | ➖     |
| Uint8ClampedArray                     | ➖     |
| Int8Array                             | ➖     |
| Uint8Array                            | ➖     |
| Int16Array                            | ➖     |
| Uint16Array                           | ➖     |
| Uint32Array                           | ➖     |
| Float64Array                          | ➖     |
| BigInt64Array                         | ➖     |
| BigUint64Array                        | ➖     |
| RangeError                            | ➖     |
| Error                                 | ✅     |
| EvalError                             | ✅     |
| ReferenceError                        | ✅     |
| SyntaxError                           | ✅     |
| TypeError                             | ✅     |
| Algorithm                             | ➖     |
| AssignedNodesOptions                  | ➖     |
| AudioBufferOptions                    | ➖     |
| AudioBufferSourceOptions              | ➖     |
| AudioConfiguration                    | ➖     |
| AudioContextOptions                   | ➖     |
| AudioNodeOptions                      | ➖     |
| AudioTimestamp                        | ➖     |
| AuthenticationExtensionsClientInputs  | ➖     |
| AuthenticationExtensionsClientOutputs | ➖     |
| AuthenticatorSelectionCriteria        | ➖     |
| BlobEventInit                         | ➖     |
| BlobPropertyBag                       | ➖     |
| CSSStyleSheetInit                     | ➖     |
| CacheQueryOptions                     | ➖     |
| CanvasRenderingContext2DSettings      | ➖     |
| ClientQueryOptions                    | ➖     |
| ClipboardItemOptions                  | ➖     |
| ComputedKeyframe                      | ➖     |
| ConstantSourceOptions                 | ➖     |
| ConstrainBooleanParameters            | ➖     |
| ConstrainDOMStringParameters          | ➖     |
| CredentialCreationOptions             | ➖     |
| CredentialPropertiesOutput            | ➖     |
| CredentialRequestOptions              | ➖     |
| CryptoKeyPair                         | ➖     |
| DOMMatrix2DInit                       | ➖     |
| DOMPointInit                          | ➖     |
| DOMQuadInit                           | ➖     |
| DOMRectInit                           | ➖     |
| DeviceMotionEventAccelerationInit     | ➖     |
| DeviceMotionEventRotationRateInit     | ➖     |
| DisplayMediaStreamOptions             | ➖     |
| DocumentTimelineOptions               | ➖     |
| DoubleRange                           | ➖     |
| EffectTiming                          | ➖     |
| ElementCreationOptions                | ➖     |
| ElementDefinitionOptions              | ➖     |
| EventInit                             | ➖     |
| EventListenerOptions                  | ➖     |
| EventSourceInit                       | ➖     |
| FileSystemFlags                       | ➖     |
| FileSystemGetDirectoryOptions         | ➖     |
| FileSystemGetFileOptions              | ➖     |
| FileSystemRemoveOptions               | ➖     |
| FocusOptions                          | ➖     |
| FontFaceDescriptors                   | ➖     |
| FullscreenOptions                     | ➖     |
| GetAnimationsOptions                  | ➖     |
| GetNotificationOptions                | ➖     |
| GetRootNodeOptions                    | ➖     |
| IDBDatabaseInfo                       | ➖     |
| IDBIndexParameters                    | ➖     |
| IDBObjectStoreParameters              | ➖     |
| IDBTransactionOptions                 | ➖     |
| IdleRequestOptions                    | ➖     |
| ImageBitmapOptions                    | ➖     |
| ImageBitmapRenderingContextSettings   | ➖     |
| ImageDataSettings                     | ➖     |
| ImportMeta                            | ➖     |
| IntersectionObserverEntryInit         | ➖     |
| IntersectionObserverInit              | ➖     |
| JsonWebKey                            | ➖     |
| KeyAlgorithm                          | ➖     |
| Keyframe                              | ➖     |
| LockInfo                              | ➖     |
| LockManagerSnapshot                   | ➖     |
| LockOptions                           | ➖     |
| MediaCapabilitiesInfo                 | ➖     |
| MediaConfiguration                    | ➖     |
| MediaElementAudioSourceOptions        | ➖     |
| MediaImage                            | ➖     |
| MediaKeySystemConfiguration           | ➖     |
| MediaKeySystemMediaCapability         | ➖     |
| MediaMetadataInit                     | ➖     |
| MediaPositionState                    | ➖     |
| MediaRecorderOptions                  | ➖     |
| MediaSessionActionDetails             | ➖     |
| MediaStreamAudioSourceOptions         | ➖     |
| MediaStreamConstraints                | ➖     |
| MediaTrackCapabilities                | ➖     |
| MediaTrackConstraintSet               | ➖     |
| MediaTrackSettings                    | ➖     |
| MediaTrackSupportedConstraints        | ➖     |
| MutationObserverInit                  | ➖     |
| NavigationPreloadState                | ➖     |
| NotificationAction                    | ➖     |
| NotificationOptions                   | ➖     |
| OfflineAudioContextOptions            | ➖     |
| OptionalEffectTiming                  | ➖     |
| PaymentCurrencyAmount                 | ➖     |
| PaymentDetailsBase                    | ➖     |
| PaymentDetailsModifier                | ➖     |
| PaymentItem                           | ➖     |
| PaymentMethodData                     | ➖     |
| PaymentValidationErrors               | ➖     |
| PerformanceMarkOptions                | ➖     |
| PerformanceMeasureOptions             | ➖     |
| PerformanceObserverInit               | ➖     |
| PeriodicWaveConstraints               | ➖     |
| PermissionDescriptor                  | ➖     |
| PositionOptions                       | ➖     |
| PropertyIndexedKeyframes              | ➖     |
| PublicKeyCredentialCreationOptions    | ➖     |
| PublicKeyCredentialDescriptor         | ➖     |
| PublicKeyCredentialEntity             | ➖     |
| PublicKeyCredentialParameters         | ➖     |
| PublicKeyCredentialRequestOptions     | ➖     |
| PushSubscriptionJSON                  | ➖     |
| PushSubscriptionOptionsInit           | ➖     |
| QueuingStrategyInit                   | ➖     |
| RTCCertificateExpiration              | ➖     |
| RTCConfiguration                      | ➖     |
| RTCDataChannelInit                    | ➖     |
| RTCDtlsFingerprint                    | ➖     |
| RTCEncodedAudioFrameMetadata          | ➖     |
| RTCEncodedVideoFrameMetadata          | ➖     |
| RTCErrorInit                          | ➖     |
| RTCIceCandidateInit                   | ➖     |
| RTCIceServer                          | ➖     |
| RTCLocalSessionDescriptionInit        | ➖     |
| RTCOfferAnswerOptions                 | ➖     |
| RTCRtcpParameters                     | ➖     |
| RTCRtpCapabilities                    | ➖     |
| RTCRtpCodecCapability                 | ➖     |
| RTCRtpCodecParameters                 | ➖     |
| RTCRtpCodingParameters                | ➖     |
| RTCRtpContributingSource              | ➖     |
| RTCRtpHeaderExtensionCapability       | ➖     |
| RTCRtpHeaderExtensionParameters       | ➖     |
| RTCRtpParameters                      | ➖     |
| RTCRtpTransceiverInit                 | ➖     |
| RTCSessionDescriptionInit             | ➖     |
| RTCStats                              | ➖     |
| ReadableStreamGetReaderOptions        | ➖     |
| RegistrationOptions                   | ➖     |
| RequestInit                           | ➖     |
| ResizeObserverOptions                 | ➖     |
| ResponseInit                          | ➖     |
| RsaOtherPrimesInfo                    | ➖     |
| SVGBoundingBoxOptions                 | ➖     |
| ScrollOptions                         | ➖     |
| ShadowRootInit                        | ➖     |
| ShareData                             | ➖     |
| StaticRangeInit                       | ➖     |
| StorageEstimate                       | ➖     |
| StreamPipeOptions                     | ➖     |
| StructuredSerializeOptions            | ➖     |
| TextDecodeOptions                     | ➖     |
| TextDecoderOptions                    | ➖     |
| TextEncoderEncodeIntoResult           | ➖     |
| TouchInit                             | ➖     |
| ULongRange                            | ➖     |
| UnderlyingByteSource                  | ➖     |
| ValidityStateFlags                    | ➖     |
| VideoColorSpaceInit                   | ➖     |
| VideoConfiguration                    | ➖     |
| VideoFrameCallbackMetadata            | ➖     |
| WebGLContextAttributes                | ➖     |
| WorkerOptions                         | ➖     |
| WorkletOptions                        | ➖     |
| ANGLE_instanced_arrays                | ➖     |
| ARIAMixin                             | ➖     |
| AbortController                       | ➖     |
| AbstractRange                         | ➖     |
| AbstractWorker                        | ➖     |
| Animatable                            | ➖     |
| AnimationEffect                       | ➖     |
| AnimationFrameProvider                | ➖     |
| AnimationTimeline                     | ➖     |
| AudioBuffer                           | ➖     |
| AudioListener                         | ➖     |
| AudioParam                            | ➖     |
| AuthenticatorResponse                 | ➖     |
| BarProp                               | ➖     |
| Blob                                  | ➖     |
| Body                                  | ➖     |
| CSSRule                               | ➖     |
| CSSRuleList                           | ➖     |
| CSSStyleDeclaration                   | ➖     |
| Cache                                 | ➖     |
| CacheStorage                          | ➖     |
| CanvasCompositing                     | ➖     |
| CanvasDrawImage                       | ➖     |
| CanvasDrawPath                        | ➖     |
| CanvasFillStrokeStyles                | ➖     |
| CanvasFilters                         | ➖     |
| CanvasGradient                        | ➖     |
| CanvasImageData                       | ➖     |
| CanvasImageSmoothing                  | ➖     |
| CanvasPath                            | ➖     |
| CanvasPathDrawingStyles               | ➖     |
| CanvasPattern                         | ➖     |
| CanvasRect                            | ➖     |
| CanvasShadowStyles                    | ➖     |
| CanvasState                           | ➖     |
| CanvasText                            | ➖     |
| CanvasTextDrawingStyles               | ➖     |
| CanvasTransform                       | ➖     |
| CanvasUserInterface                   | ➖     |
| ClipboardItem                         | ➖     |
| Credential                            | ➖     |
| CredentialsContainer                  | ➖     |
| Crypto                                | ➖     |
| CryptoKey                             | ➖     |
| CustomElementRegistry                 | ➖     |
| DOMImplementation                     | ➖     |
| DOMMatrixReadOnly                     | ➖     |
| DOMParser                             | ➖     |
| DOMPointReadOnly                      | ➖     |
| DOMQuad                               | ➖     |
| DOMRectList                           | ➖     |
| DOMRectReadOnly                       | ➖     |
| DOMStringList                         | ➖     |
| DOMTokenList                          | ➖     |
| DataTransfer                          | ➖     |
| DataTransferItem                      | ➖     |
| DataTransferItemList                  | ➖     |
| DeviceMotionEventAcceleration         | ➖     |
| DeviceMotionEventRotationRate         | ➖     |
| DocumentAndElementEventHandlers       | ➖     |
| DocumentOrShadowRoot                  | ➖     |
| EXT_blend_minmax                      | ➖     |
| EXT_color_buffer_float                | ➖     |
| EXT_color_buffer_half_float           | ➖     |
| EXT_float_blend                       | ➖     |
| EXT_frag_depth                        | ➖     |
| EXT_sRGB                              | ➖     |
| EXT_shader_texture_lod                | ➖     |
| EXT_texture_compression_bptc          | ➖     |
| EXT_texture_compression_rgtc          | ➖     |
| EXT_texture_filter_anisotropic        | ➖     |
| EXT_texture_norm16                    | ➖     |
| ElementCSSInlineStyle                 | ➖     |
| ElementContentEditable                | ➖     |
| Event                                 | ➖     |
| EventCounts                           | ➖     |
| EventListener                         | ➖     |
| EventListenerObject                   | ➖     |
| EventTarget                           | ➖     |
| External                              | ➖     |
| FileList                              | ➖     |
| FileSystem                            | ➖     |
| FileSystemDirectoryReader             | ➖     |
| FileSystemEntry                       | ➖     |
| FileSystemHandle                      | ➖     |
| FontFace                              | ➖     |
| FontFaceSource                        | ➖     |
| FormData                              | ➖     |
| Gamepad                               | ➖     |
| GamepadButton                         | ➖     |
| GamepadHapticActuator                 | ➖     |
| GenericTransformStream                | ➖     |
| Geolocation                           | ➖     |
| GeolocationCoordinates                | ➖     |
| GeolocationPosition                   | ➖     |
| GeolocationPositionError              | ➖     |
| GlobalEventHandlers                   | ➖     |
| Headers                               | ➖     |
| History                               | ➖     |
| IDBCursor                             | ➖     |
| IDBFactory                            | ➖     |
| IDBIndex                              | ➖     |
| IDBKeyRange                           | ➖     |
| IDBObjectStore                        | ➖     |
| IdleDeadline                          | ➖     |
| ImageBitmap                           | ➖     |
| ImageBitmapRenderingContext           | ➖     |
| ImageData                             | ➖     |
| InnerHTML                             | ➖     |
| IntersectionObserver                  | ➖     |
| IntersectionObserverEntry             | ➖     |
| KHR_parallel_shader_compile           | ➖     |
| LinkStyle                             | ➖     |
| Location                              | ➖     |
| Lock                                  | ➖     |
| LockManager                           | ➖     |
| MediaCapabilities                     | ➖     |
| MediaDeviceInfo                       | ➖     |
| MediaError                            | ➖     |
| MediaKeySystemAccess                  | ➖     |
| MediaKeys                             | ➖     |
| MediaList                             | ➖     |
| MediaMetadata                         | ➖     |
| MediaSession                          | ➖     |
| MessageChannel                        | ➖     |
| MimeType                              | ➖     |
| MimeTypeArray                         | ➖     |
| MutationObserver                      | ➖     |
| MutationRecord                        | ➖     |
| NavigationPreloadManager              | ➖     |
| NavigatorAutomationInformation        | ➖     |
| NavigatorConcurrentHardware           | ➖     |
| NavigatorContentUtils                 | ➖     |
| NavigatorCookies                      | ➖     |
| NavigatorID                           | ➖     |
| NavigatorLanguage                     | ➖     |
| NavigatorLocks                        | ➖     |
| NavigatorOnLine                       | ➖     |
| NavigatorPlugins                      | ➖     |
| NavigatorStorage                      | ➖     |
| NodeIterator                          | ➖     |
| NodeList                              | ➖     |
| NonDocumentTypeChildNode              | ➖     |
| NonElementParentNode                  | ➖     |
| OES_draw_buffers_indexed              | ➖     |
| OES_element_index_uint                | ➖     |
| OES_standard_derivatives              | ➖     |
| OES_texture_float                     | ➖     |
| OES_texture_float_linear              | ➖     |
| OES_texture_half_float                | ➖     |
| OES_texture_half_float_linear         | ➖     |
| OES_vertex_array_object               | ➖     |
| OVR_multiview2                        | ➖     |
| PerformanceEntry                      | ➖     |
| PerformanceNavigation                 | ➖     |
| PerformanceObserver                   | ➖     |
| PerformanceObserverEntryList          | ➖     |
| PerformanceServerTiming               | ➖     |
| PerformanceTiming                     | ➖     |
| PeriodicWave                          | ➖     |
| Permissions                           | ➖     |
| Plugin                                | ➖     |
| PluginArray                           | ➖     |
| PushManager                           | ➖     |
| PushSubscription                      | ➖     |
| PushSubscriptionOptions               | ➖     |
| RTCCertificate                        | ➖     |
| RTCEncodedAudioFrame                  | ➖     |
| RTCEncodedVideoFrame                  | ➖     |
| RTCIceCandidate                       | ➖     |
| RTCRtpReceiver                        | ➖     |
| RTCRtpSender                          | ➖     |
| RTCRtpTransceiver                     | ➖     |
| RTCSessionDescription                 | ➖     |
| RTCStatsReport                        | ➖     |
| ReadableByteStreamController          | ➖     |
| ReadableStreamBYOBRequest             | ➖     |
| ReadableStreamGenericReader           | ➖     |
| ResizeObserver                        | ➖     |
| ResizeObserverEntry                   | ➖     |
| ResizeObserverSize                    | ➖     |
| SVGAngle                              | ➖     |
| SVGAnimatedAngle                      | ➖     |
| SVGAnimatedBoolean                    | ➖     |
| SVGAnimatedEnumeration                | ➖     |
| SVGAnimatedInteger                    | ➖     |
| SVGAnimatedLength                     | ➖     |
| SVGAnimatedLengthList                 | ➖     |
| SVGAnimatedNumber                     | ➖     |
| SVGAnimatedNumberList                 | ➖     |
| SVGAnimatedPoints                     | ➖     |
| SVGAnimatedPreserveAspectRatio        | ➖     |
| SVGAnimatedRect                       | ➖     |
| SVGAnimatedString                     | ➖     |
| SVGAnimatedTransformList              | ➖     |
| SVGFilterPrimitiveStandardAttributes  | ➖     |
| SVGFitToViewBox                       | ➖     |
| SVGLength                             | ➖     |
| SVGLengthList                         | ➖     |
| SVGNumber                             | ➖     |
| SVGNumberList                         | ➖     |
| SVGPointList                          | ➖     |
| SVGPreserveAspectRatio                | ➖     |
| SVGStringList                         | ➖     |
| SVGTests                              | ➖     |
| SVGTransform                          | ➖     |
| SVGTransformList                      | ➖     |
| SVGURIReference                       | ➖     |
| SVGUnitTypes                          | ➖     |
| Screen                                | ➖     |
| Selection                             | ➖     |
| Slottable                             | ➖     |
| SpeechRecognitionAlternative          | ➖     |
| SpeechRecognitionResult               | ➖     |
| SpeechRecognitionResultList           | ➖     |
| SpeechSynthesisVoice                  | ➖     |
| Storage                               | ➖     |
| StorageManager                        | ➖     |
| StyleMedia                            | ➖     |
| StyleSheet                            | ➖     |
| StyleSheetList                        | ➖     |
| SubtleCrypto                          | ➖     |
| TextDecoderCommon                     | ➖     |
| TextEncoderCommon                     | ➖     |
| TextMetrics                           | ➖     |
| TextTrackCueList                      | ➖     |
| TimeRanges                            | ➖     |
| Touch                                 | ➖     |
| TouchList                             | ➖     |
| TreeWalker                            | ➖     |
| URL                                   | ➖     |
| URLSearchParams                       | ➖     |
| VTTRegion                             | ➖     |
| ValidityState                         | ➖     |
| VideoColorSpace                       | ➖     |
| VideoPlaybackQuality                  | ➖     |
| WEBGL_color_buffer_float              | ➖     |
| WEBGL_compressed_texture_astc         | ➖     |
| WEBGL_compressed_texture_etc          | ➖     |
| WEBGL_compressed_texture_etc1         | ➖     |
| WEBGL_compressed_texture_s3tc         | ➖     |
| WEBGL_compressed_texture_s3tc_srgb    | ➖     |
| WEBGL_debug_renderer_info             | ➖     |
| WEBGL_debug_shaders                   | ➖     |
| WEBGL_depth_texture                   | ➖     |
| WEBGL_draw_buffers                    | ➖     |
| WEBGL_lose_context                    | ➖     |
| WEBGL_multi_draw                      | ➖     |
| WebGL2RenderingContextBase            | ➖     |
| WebGL2RenderingContextOverloads       | ➖     |
| WebGLActiveInfo                       | ➖     |
| WebGLBuffer                           | ➖     |
| WebGLFramebuffer                      | ➖     |
| WebGLProgram                          | ➖     |
| WebGLQuery                            | ➖     |
| WebGLRenderbuffer                     | ➖     |
| WebGLRenderingContextBase             | ➖     |
| WebGLRenderingContextOverloads        | ➖     |
| WebGLSampler                          | ➖     |
| WebGLShader                           | ➖     |
| WebGLShaderPrecisionFormat            | ➖     |
| WebGLSync                             | ➖     |
| WebGLTexture                          | ➖     |
| WebGLTransformFeedback                | ➖     |
| WebGLUniformLocation                  | ➖     |
| WebGLVertexArrayObject                | ➖     |
| WebGLVertexArrayObjectOES             | ➖     |
| WindowEventHandlers                   | ➖     |
| WindowLocalStorage                    | ➖     |
| WindowOrWorkerGlobalScope             | ➖     |
| WindowSessionStorage                  | ➖     |
| Worklet                               | ➖     |
| WritableStreamDefaultController       | ➖     |
| XMLSerializer                         | ➖     |
| XPathEvaluatorBase                    | ➖     |
| XPathExpression                       | ➖     |
| XPathResult                           | ➖     |
| XSLTProcessor                         | ➖     |
| BlobCallback                          | ➖     |
| CustomElementConstructor              | ➖     |
| DecodeErrorCallback                   | ➖     |
| DecodeSuccessCallback                 | ➖     |
| ErrorCallback                         | ➖     |
| FileCallback                          | ➖     |
| FileSystemEntriesCallback             | ➖     |
| FileSystemEntryCallback               | ➖     |
| FrameRequestCallback                  | ➖     |
| FunctionStringCallback                | ➖     |
| IdleRequestCallback                   | ➖     |
| IntersectionObserverCallback          | ➖     |
| LockGrantedCallback                   | ➖     |
| MediaSessionActionHandler             | ➖     |
| MutationCallback                      | ➖     |
| NotificationPermissionCallback        | ➖     |
| OnBeforeUnloadEventHandlerNonNull     | ➖     |
| OnErrorEventHandlerNonNull            | ➖     |
| PerformanceObserverCallback           | ➖     |
| PositionCallback                      | ➖     |
| PositionErrorCallback                 | ➖     |
| RTCPeerConnectionErrorCallback        | ➖     |
| RTCSessionDescriptionCallback         | ➖     |
| RemotePlaybackAvailabilityCallback    | ➖     |
| ResizeObserverCallback                | ➖     |
| UnderlyingSinkAbortCallback           | ➖     |
| UnderlyingSinkCloseCallback           | ➖     |
| UnderlyingSinkStartCallback           | ➖     |
| UnderlyingSourceCancelCallback        | ➖     |
| VideoFrameRequestCallback             | ➖     |
| VoidFunction                          | ➖     |
| AddEventListenerOptions               | ➖     |
| AesCbcParams                          | ➖     |
| AesCtrParams                          | ➖     |
| AesDerivedKeyParams                   | ➖     |
| AesGcmParams                          | ➖     |
| AesKeyAlgorithm                       | ➖     |
| AesKeyGenParams                       | ➖     |
| AnalyserOptions                       | ➖     |
| AnimationEventInit                    | ➖     |
| AnimationPlaybackEventInit            | ➖     |
| AudioProcessingEventInit              | ➖     |
| AudioWorkletNodeOptions               | ➖     |
| BiquadFilterOptions                   | ➖     |
| ChannelMergerOptions                  | ➖     |
| ChannelSplitterOptions                | ➖     |
| ClipboardEventInit                    | ➖     |
| CloseEventInit                        | ➖     |
| CompositionEventInit                  | ➖     |
| ComputedEffectTiming                  | ➖     |
| ConstrainDoubleRange                  | ➖     |
| ConstrainULongRange                   | ➖     |
| ConvolverOptions                      | ➖     |
| DOMMatrixInit                         | ➖     |
| DelayOptions                          | ➖     |
| DeviceMotionEventInit                 | ➖     |
| DeviceOrientationEventInit            | ➖     |
| DragEventInit                         | ➖     |
| DynamicsCompressorOptions             | ➖     |
| EcKeyAlgorithm                        | ➖     |
| EcKeyGenParams                        | ➖     |
| EcKeyImportParams                     | ➖     |
| EcdhKeyDeriveParams                   | ➖     |
| EcdsaParams                           | ➖     |
| ErrorEventInit                        | ➖     |
| EventModifierInit                     | ➖     |
| FilePropertyBag                       | ➖     |
| FocusEventInit                        | ➖     |
| FontFaceSetLoadEventInit              | ➖     |
| FormDataEventInit                     | ➖     |
| GainOptions                           | ➖     |
| GamepadEventInit                      | ➖     |
| HashChangeEventInit                   | ➖     |
| HkdfParams                            | ➖     |
| HmacImportParams                      | ➖     |
| HmacKeyAlgorithm                      | ➖     |
| HmacKeyGenParams                      | ➖     |
| IDBVersionChangeEventInit             | ➖     |
| IIRFilterOptions                      | ➖     |
| InputEventInit                        | ➖     |
| KeyboardEventInit                     | ➖     |
| KeyframeAnimationOptions              | ➖     |
| KeyframeEffectOptions                 | ➖     |
| MediaCapabilitiesDecodingInfo         | ➖     |
| MediaCapabilitiesEncodingInfo         | ➖     |
| MediaDecodingConfiguration            | ➖     |
| MediaEncodingConfiguration            | ➖     |
| MediaEncryptedEventInit               | ➖     |
| MediaKeyMessageEventInit              | ➖     |
| MediaQueryListEventInit               | ➖     |
| MediaStreamTrackEventInit             | ➖     |
| MediaTrackConstraints                 | ➖     |
| MouseEventInit                        | ➖     |
| MultiCacheQueryOptions                | ➖     |
| OfflineAudioCompletionEventInit       | ➖     |
| OscillatorOptions                     | ➖     |
| PageTransitionEventInit               | ➖     |
| PannerOptions                         | ➖     |
| PaymentDetailsInit                    | ➖     |
| PaymentDetailsUpdate                  | ➖     |
| PaymentMethodChangeEventInit          | ➖     |
| PaymentRequestUpdateEventInit         | ➖     |
| Pbkdf2Params                          | ➖     |
| PeriodicWaveOptions                   | ➖     |
| PictureInPictureEventInit             | ➖     |
| PointerEventInit                      | ➖     |
| PopStateEventInit                     | ➖     |
| ProgressEventInit                     | ➖     |
| PromiseRejectionEventInit             | ➖     |
| PublicKeyCredentialRpEntity           | ➖     |
| PublicKeyCredentialUserEntity         | ➖     |
| RTCAnswerOptions                      | ➖     |
| RTCDTMFToneChangeEventInit            | ➖     |
| RTCDataChannelEventInit               | ➖     |
| RTCErrorEventInit                     | ➖     |
| RTCIceCandidatePairStats              | ➖     |
| RTCInboundRtpStreamStats              | ➖     |
| RTCOfferOptions                       | ➖     |
| RTCOutboundRtpStreamStats             | ➖     |
| RTCPeerConnectionIceErrorEventInit    | ➖     |
| RTCPeerConnectionIceEventInit         | ➖     |
| RTCReceivedRtpStreamStats             | ➖     |
| RTCRtpEncodingParameters              | ➖     |
| RTCRtpReceiveParameters               | ➖     |
| RTCRtpSendParameters                  | ➖     |
| RTCRtpStreamStats                     | ➖     |
| RTCRtpSynchronizationSource           | ➖     |
| RTCSentRtpStreamStats                 | ➖     |
| RTCTrackEventInit                     | ➖     |
| RTCTransportStats                     | ➖     |
| RsaHashedImportParams                 | ➖     |
| RsaHashedKeyAlgorithm                 | ➖     |
| RsaHashedKeyGenParams                 | ➖     |
| RsaKeyAlgorithm                       | ➖     |
| RsaKeyGenParams                       | ➖     |
| RsaOaepParams                         | ➖     |
| RsaPssParams                          | ➖     |
| ScrollIntoViewOptions                 | ➖     |
| ScrollToOptions                       | ➖     |
| SecurityPolicyViolationEventInit      | ➖     |
| SpeechSynthesisErrorEventInit         | ➖     |
| SpeechSynthesisEventInit              | ➖     |
| StereoPannerOptions                   | ➖     |
| StorageEventInit                      | ➖     |
| SubmitEventInit                       | ➖     |
| TouchEventInit                        | ➖     |
| TrackEventInit                        | ➖     |
| TransitionEventInit                   | ➖     |
| UIEventInit                           | ➖     |
| WaveShaperOptions                     | ➖     |
| WebGLContextEventInit                 | ➖     |
| WheelEventInit                        | ➖     |
| WindowPostMessageOptions              | ➖     |
| AbortSignal                           | ➖     |
| AnalyserNode                          | ➖     |
| Animation                             | ➖     |
| AnimationEvent                        | ➖     |
| AnimationPlaybackEvent                | ➖     |
| Attr                                  | ➖     |
| AudioBufferSourceNode                 | ➖     |
| AudioContext                          | ➖     |
| AudioDestinationNode                  | ➖     |
| AudioNode                             | ➖     |
| AudioProcessingEvent                  | ➖     |
| AudioScheduledSourceNode              | ➖     |
| AudioWorklet                          | ➖     |
| AudioWorkletNode                      | ➖     |
| AuthenticatorAssertionResponse        | ➖     |
| AuthenticatorAttestationResponse      | ➖     |
| BaseAudioContext                      | ➖     |
| BeforeUnloadEvent                     | ➖     |
| BiquadFilterNode                      | ➖     |
| BlobEvent                             | ➖     |
| BroadcastChannel                      | ➖     |
| CDATASection                          | ➖     |
| CSSAnimation                          | ➖     |
| CSSConditionRule                      | ➖     |
| CSSContainerRule                      | ➖     |
| CSSCounterStyleRule                   | ➖     |
| CSSFontFaceRule                       | ➖     |
| CSSFontPaletteValuesRule              | ➖     |
| CSSGroupingRule                       | ➖     |
| CSSImportRule                         | ➖     |
| CSSKeyframeRule                       | ➖     |
| CSSKeyframesRule                      | ➖     |
| CSSLayerBlockRule                     | ➖     |
| CSSLayerStatementRule                 | ➖     |
| CSSMediaRule                          | ➖     |
| CSSNamespaceRule                      | ➖     |
| CSSPageRule                           | ➖     |
| CSSStyleRule                          | ➖     |
| CSSStyleSheet                         | ➖     |
| CSSSupportsRule                       | ➖     |
| CSSTransition                         | ➖     |
| CanvasCaptureMediaStreamTrack         | ➖     |
| ChannelMergerNode                     | ➖     |
| ChannelSplitterNode                   | ➖     |
| ChildNode                             | ➖     |
| ClientRect                            | ➖     |
| Clipboard                             | ➖     |
| ClipboardEvent                        | ➖     |
| CloseEvent                            | ➖     |
| Comment                               | ➖     |
| CompositionEvent                      | ➖     |
| ConstantSourceNode                    | ➖     |
| ConvolverNode                         | ➖     |
| CountQueuingStrategy                  | ➖     |
| DOMMatrix                             | ➖     |
| DOMPoint                              | ➖     |
| DOMRect                               | ➖     |
| DelayNode                             | ➖     |
| DeviceMotionEvent                     | ➖     |
| DeviceOrientationEvent                | ➖     |
| DocumentTimeline                      | ➖     |
| DragEvent                             | ➖     |
| DynamicsCompressorNode                | ➖     |
| ElementInternals                      | ➖     |
| ErrorEvent                            | ➖     |
| EventSource                           | ➖     |
| File                                  | ➖     |
| FileReader                            | ➖     |
| FileSystemDirectoryEntry              | ➖     |
| FileSystemDirectoryHandle             | ➖     |
| FileSystemFileEntry                   | ➖     |
| FileSystemFileHandle                  | ➖     |
| FocusEvent                            | ➖     |
| FontFaceSet                           | ➖     |
| FontFaceSetLoadEvent                  | ➖     |
| FormDataEvent                         | ➖     |
| GainNode                              | ➖     |
| GamepadEvent                          | ➖     |
| HashChangeEvent                       | ➖     |
| IDBCursorWithValue                    | ➖     |
| IDBDatabase                           | ➖     |
| IDBTransaction                        | ➖     |
| IDBVersionChangeEvent                 | ➖     |
| IIRFilterNode                         | ➖     |
| InputDeviceInfo                       | ➖     |
| InputEvent                            | ➖     |
| KeyboardEvent                         | ➖     |
| KeyframeEffect                        | ➖     |
| MediaDevices                          | ➖     |
| MediaElementAudioSourceNode           | ➖     |
| MediaEncryptedEvent                   | ➖     |
| MediaKeyMessageEvent                  | ➖     |
| MediaKeySession                       | ➖     |
| MediaQueryList                        | ➖     |
| MediaQueryListEvent                   | ➖     |
| MediaRecorder                         | ➖     |
| MediaSource                           | ➖     |
| MediaStream                           | ➖     |
| MediaStreamAudioDestinationNode       | ➖     |
| MediaStreamAudioSourceNode            | ➖     |
| MediaStreamTrack                      | ➖     |
| MediaStreamTrackEvent                 | ➖     |
| MessagePort                           | ➖     |
| MouseEvent                            | ➖     |
| MutationEvent                         | ➖     |
| Node                                  | ➖     |
| Notification                          | ➖     |
| OfflineAudioCompletionEvent           | ➖     |
| OfflineAudioContext                   | ➖     |
| OffscreenCanvas                       | ➖     |
| OscillatorNode                        | ➖     |
| OverconstrainedError                  | ➖     |
| PageTransitionEvent                   | ➖     |
| PannerNode                            | ➖     |
| ParentNode                            | ➖     |
| Path2D                                | ➖     |
| PaymentMethodChangeEvent              | ➖     |
| PaymentRequest                        | ➖     |
| PaymentRequestUpdateEvent             | ➖     |
| PaymentResponse                       | ➖     |
| Performance                           | ➖     |
| PerformanceEventTiming                | ➖     |
| PerformanceMark                       | ➖     |
| PerformanceMeasure                    | ➖     |
| PerformanceNavigationTiming           | ➖     |
| PerformancePaintTiming                | ➖     |
| PerformanceResourceTiming             | ➖     |
| PermissionStatus                      | ➖     |
| PictureInPictureEvent                 | ➖     |
| PictureInPictureWindow                | ➖     |
| PointerEvent                          | ➖     |
| PopStateEvent                         | ➖     |
| PromiseRejectionEvent                 | ➖     |
| PublicKeyCredential                   | ➖     |
| RTCDTMFSender                         | ➖     |
| RTCDTMFToneChangeEvent                | ➖     |
| RTCDataChannel                        | ➖     |
| RTCDataChannelEvent                   | ➖     |
| RTCDtlsTransport                      | ➖     |
| RTCError                              | ➖     |
| RTCErrorEvent                         | ➖     |
| RTCIceTransport                       | ➖     |
| RTCPeerConnection                     | ➖     |
| RTCPeerConnectionIceErrorEvent        | ➖     |
| RTCPeerConnectionIceEvent             | ➖     |
| RTCSctpTransport                      | ➖     |
| RTCTrackEvent                         | ➖     |
| RadioNodeList                         | ➖     |
| Range                                 | ➖     |
| ReadableStreamBYOBReader              | ➖     |
| RemotePlayback                        | ➖     |
| Request                               | ➖     |
| Response                              | ➖     |
| SVGAnimateElement                     | ➖     |
| SVGAnimateMotionElement               | ➖     |
| SVGAnimateTransformElement            | ➖     |
| SVGCircleElement                      | ➖     |
| SVGClipPathElement                    | ➖     |
| SVGComponentTransferFunctionElement   | ➖     |
| SVGDefsElement                        | ➖     |
| SVGDescElement                        | ➖     |
| SVGEllipseElement                     | ➖     |
| SVGFEDistantLightElement              | ➖     |
| SVGFEFuncAElement                     | ➖     |
| SVGFEFuncBElement                     | ➖     |
| SVGFEFuncGElement                     | ➖     |
| SVGFEFuncRElement                     | ➖     |
| SVGFEMergeNodeElement                 | ➖     |
| SVGFEPointLightElement                | ➖     |
| SVGFESpotLightElement                 | ➖     |
| SVGForeignObjectElement               | ➖     |
| SVGGElement                           | ➖     |
| SVGGeometryElement                    | ➖     |
| SVGLineElement                        | ➖     |
| SVGLinearGradientElement              | ➖     |
| SVGMaskElement                        | ➖     |
| SVGMetadataElement                    | ➖     |
| SVGPathElement                        | ➖     |
| SVGRadialGradientElement              | ➖     |
| SVGRectElement                        | ➖     |
| SVGSetElement                         | ➖     |
| SVGStopElement                        | ➖     |
| SVGSwitchElement                      | ➖     |
| SVGTSpanElement                       | ➖     |
| SVGTextContentElement                 | ➖     |
| SVGTextElement                        | ➖     |
| SVGTextPositioningElement             | ➖     |
| SVGTitleElement                       | ➖     |
| ScreenOrientation                     | ➖     |
| ScriptProcessorNode                   | ➖     |
| SecurityPolicyViolationEvent          | ➖     |
| ServiceWorkerContainer                | ➖     |
| ServiceWorkerRegistration             | ➖     |
| SourceBuffer                          | ➖     |
| SourceBufferList                      | ➖     |
| SpeechSynthesis                       | ➖     |
| SpeechSynthesisErrorEvent             | ➖     |
| SpeechSynthesisEvent                  | ➖     |
| SpeechSynthesisUtterance              | ➖     |
| StaticRange                           | ➖     |
| StereoPannerNode                      | ➖     |
| StorageEvent                          | ➖     |
| SubmitEvent                           | ➖     |
| TextDecoder                           | ➖     |
| TextEncoder                           | ➖     |
| TextTrack                             | ➖     |
| TextTrackCue                          | ➖     |
| TextTrackList                         | ➖     |
| TouchEvent                            | ➖     |
| TrackEvent                            | ➖     |
| TransitionEvent                       | ➖     |
| UIEvent                               | ➖     |
| VTTCue                                | ➖     |
| VisualViewport                        | ➖     |
| WaveShaperNode                        | ➖     |
| WebGLContextEvent                     | ➖     |
| WebSocket                             | ➖     |
| WheelEvent                            | ➖     |
| XMLDocument                           | ➖     |
| XMLHttpRequest                        | ➖     |
| XMLHttpRequestEventTarget             | ➖     |
| XMLHttpRequestUpload                  | ➖     |
| XPathEvaluator                        | ➖     |

#### HTML (80)

| Name                       | Tests |
|----------------------------|-------|
| HTMLDirectoryElement       | ➖     | 
| HTMLDocument               | ➖     | 
| HTMLFontElement            | ➖     | 
| HTMLFrameElement           | ➖     | 
| HTMLMarqueeElement         | ➖     | 
| HTMLParamElement           | ➖     | 
| HTMLTableDataCellElement   | ➖     | 
| HTMLTableHeaderCellElement | ➖     | 
| HTMLAllCollection          | ➖     | 
| HTMLCollectionBase         | ➖     | 
| HTMLHyperlinkElementUtils  | ➖     | 
| HTMLOrSVGElement           | ➖     | 
| HTMLAnchorElement          | ➖     | 
| HTMLAreaElement            | ➖     | 
| HTMLAudioElement           | ➖     | 
| HTMLBRElement              | ➖     | 
| HTMLBaseElement            | ➖     | 
| HTMLBodyElement            | ➖     | 
| HTMLButtonElement          | ➖     | 
| HTMLCanvasElement          | ➖     | 
| HTMLCollection             | ➖     | 
| HTMLDListElement           | ➖     | 
| HTMLDataElement            | ➖     | 
| HTMLDataListElement        | ➖     | 
| HTMLDetailsElement         | ➖     | 
| HTMLDialogElement          | ➖     | 
| HTMLDivElement             | ➖     | 
| HTMLElement                | ➖     | 
| HTMLEmbedElement           | ➖     | 
| HTMLFieldSetElement        | ➖     | 
| HTMLFormControlsCollection | ➖     | 
| HTMLFormElement            | ➖     | 
| HTMLHRElement              | ➖     | 
| HTMLHeadElement            | ➖     | 
| HTMLHeadingElement         | ➖     | 
| HTMLHtmlElement            | ➖     | 
| HTMLIFrameElement          | ➖     | 
| HTMLImageElement           | ➖     | 
| HTMLInputElement           | ➖     | 
| HTMLLIElement              | ➖     | 
| HTMLLabelElement           | ➖     | 
| HTMLLegendElement          | ➖     | 
| HTMLLinkElement            | ➖     | 
| HTMLMapElement             | ➖     | 
| HTMLMediaElement           | ➖     | 
| HTMLMenuElement            | ➖     | 
| HTMLMetaElement            | ➖     | 
| HTMLMeterElement           | ➖     | 
| HTMLModElement             | ➖     | 
| HTMLOListElement           | ➖     | 
| HTMLObjectElement          | ➖     | 
| HTMLOptGroupElement        | ➖     | 
| HTMLOptionElement          | ➖     | 
| HTMLOptionsCollection      | ➖     | 
| HTMLOutputElement          | ➖     | 
| HTMLParagraphElement       | ➖     | 
| HTMLPictureElement         | ➖     | 
| HTMLPreElement             | ➖     | 
| HTMLProgressElement        | ➖     | 
| HTMLQuoteElement           | ➖     | 
| HTMLScriptElement          | ➖     | 
| HTMLSelectElement          | ➖     | 
| HTMLSlotElement            | ➖     | 
| HTMLSourceElement          | ➖     | 
| HTMLSpanElement            | ➖     | 
| HTMLStyleElement           | ➖     | 
| HTMLTableCaptionElement    | ➖     | 
| HTMLTableCellElement       | ➖     | 
| HTMLTableColElement        | ➖     | 
| HTMLTableElement           | ➖     | 
| HTMLTableRowElement        | ➖     | 
| HTMLTableSectionElement    | ➖     | 
| HTMLTemplateElement        | ➖     | 
| HTMLTextAreaElement        | ➖     | 
| HTMLTimeElement            | ➖     | 
| HTMLTitleElement           | ➖     | 
| HTMLTrackElement           | ➖     | 
| HTMLUListElement           | ➖     | 
| HTMLUnknownElement         | ➖     | 
| HTMLVideoElement           | ➖     | 


[Повернутись до змісту](#-зміст)

## ➕ Додаткове

Якщо Вам потрібно перевіряти аргументи перед виконанням функції, Ви можете поєднати пакунок із [@p4ck493/ts-type-guard](https://www.npmjs.com/package/@p4ck493/ts-type-guard).

### Приклад

```typescript

import {TypeGuard} from "@p4ck493/ts-type-guard";

class Person {
    #firstName: string;
    #secondName: string;
    #age: number;

    @TypeGuard([is.string.not.empty])
    public setFirstName(firstName: string): void {
        this.#firstName = firstName;
    }

    @TypeGuard([is.string.not.empty])
    public setSecondName(secondName: string): void {
        this.#secondName = secondName;
    }

    // Якщо другій армент має мати такуж саму перевірку то краще не доблювати функції,
    // в цьому випадку краще залишити одну, для наступного аргументу буде взяти,
    // попередня перевірка, приклад нище.
    // @GuardType([is.string.not.empty]) - є еквівалентним.
    @TypeGuard([is.string.not.empty, is.string.not.empty])
    public setSomeData(firstName: string, secondName: string): void {
        this.#firstName = firstName;
        this.#secondName = secondName;
    }

    // Для необов’язкового аргументу використовуйте значення NULL.
    @TypeGuard([is.string.not.empty, null])
    public setSomeData(firstName: string, age?: number): void {
        this.#firstName = firstName;
        this.#age = age;
    }

    @TypeGuard({
        result: [is.string]
    })
    public get firstName(): string {
        return this.#firstName;
    }

    @TypeGuard({
        arguments: [is.string],
        result: [is.boolean]
    })
    public setJSONToSomethink(argument: any): boolean {
        try {
            this.#somethink = JSON.parse(argument)
            return true;
        } catch (e) {
            return false;
        }
    }
    
}

```

[Повернутись до змісту](#-зміст)

## 👤 Сприяння

[//]: # (Please read [CONTRIBUTING.md]&#40;CONTRIBUTING.md&#41; for details on our code of conduct, and the process for submitting pull requests to us.)

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add your changes: `git add .`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request 😎

## ✍️ Автори

* **Ivan Karbashevskyi** - *Initial work* - [Karbashevskyi](https://github.com/Karbashevskyi)

See also the list of [contributors](https://github.com/p4ck493/ts-is/contributors) who participated in this project.

## 📜 Ліцензія

[MIT License](https://andreasonny.mit-license.org/2019) © p4ck493

# ts-is
![NPM Latest Version](https://img.shields.io/npm/v/@p4ck493/ts-is)
![Downloads Count](https://img.shields.io/npm/dm/@p4ck493/ts-is.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=@p4ck493/ts-is)
![Test Status](https://img.shields.io/travis/p4ck493/ts-is/main.svg)
![Last Update Date](https://img.shields.io/github/last-commit/p4ck493/ts-is)
![Project License](https://img.shields.io/github/license/p4ck493/ts-is)
![Issues](https://img.shields.io/github/issues/p4ck493/ts-is)
![Forks](https://img.shields.io/github/forks/p4ck493/ts-is)
![Stars](https://img.shields.io/github/stars/p4ck493/ts-is)
![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fp4ck493%2Fts-is)

## 🌍 Мови
> 🇺🇦 [українська]() | 🇬🇧 [english]()


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

## 📝 Зміст

- [ts-is](#ts-is)
    - [Ідея](#-ідея)
    - [Зміст](#-зміст)
    - [Інсталювання](#-інсталювання)
    - [CDN](#-cdn)
    - [Використання](#-використання)
        - [Приклади](#-приклади)
            - [Методи](#-методи)
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
    - [Що нового в 3.0.1?](#що-нового-в-301)
      - [В цілому](#в-цілому-)
      - [В деталях](#в-деталях-)
      - [Чому пакунок почав обслуговувати глобальні контексти та які?](#чому-пакунок-почав-обслуговувати-глобальні-контексти-та-які)
    - [Сприяння](#-сприяння)
    - [Результат тестування](#результат-тестування)
    - [Автори](#-автори)
    - [Ліцензія](#-ліцензія)

## 💿 Інсталювання

```sh
npm install @p4ck493/ts-is
```

## 🔗 CDN
```html
<script>var exports = {};</script>
<script src="//unpkg.com/@p4ck493/ts-is@3.0.1/dist/index.js"></script>
<script>
  const {is} = exports;
  console.log(is.string('')); // true
</script>
```

## 🙌 Використання
```sh
import {is} from "@p4ck493/ts-is";
```

### Приклади

#### Syntax

```typescript

$cmd = 'any command';

is[$cmd]();
is[$cmd][$cmd]();
is[$cmd].or[$cmd]();
is[$cmd].not[$cmd]();

$model = 'any model wich declare in pacakge by decorator';

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

is.Date(new Date()) // true

is.empty('') // true

is.Error(new Error()) // true

is.EvalError(new EvalError()) // true

is.false(false) // true

is.DataView(new DataView(new ArrayBuffer(16), 0)) // true

is.falsy('') // true 

is.function((() => {})) // true

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

is.object.or.function({}) // true

is.string.or.true.or.symbol(true) // true
```

#### Методи з обгортками

```typescript
is.object.not.empty({a: 1}) // true

is.not.object({}) // false

is.not.number(1n) // true

```

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

## 🗃️ API

### Всі методи повертають логічну вартість, тобто: true, false;

### Список методів які представлені в пакунку.

| Name           | Tests | Status  | New name            | 
|----------------|------|---------|---------------------|
| array          | ✅    |
| bigInt         | ✅    |     
| boolean        | ✅    |     
| compare        | ✅    |     
| date           | ✅    | DELETED | is.Date()           |
| empty          | ✅    |     
| error          | ✅    | DELETED | is.Error()          |
| evalError      | ✅    | DELETED | is.EvalError()      |
| false          | ✅    |     
| falsy          | ✅    |     
| function       | ✅    |     
| instanceof     | ✅    |
| map            | ✅    | DELETED | is.Map()            |     
| null           | ✅    |     
| number         | ✅    |     
| object         | ✅    |     
| referenceError | ✅    | DELETED | is.ReferenceError() |
| regExp         | ✅    | DELETED | is.RegExp()         |
| set            | ✅    | DELETED | is.Set()            |
| string         | ✅    |     
| symbol         | ✅    |     
| syntaxError    | ✅    | DELETED | is.SyntaxError()    |
| true           | ✅    |     
| truthy         | ✅    |     
| typeError      | ✅    | DELETED | is.TypeError()      |
| undefined      | ✅    |     
| URIError       | ✅    | DELETED | is.URIError()       |
| weakSet        | ✅    | DELETED | is.WeakSet()        |
| weakMap        | ✅    | DELETED | is.WeakMap()        |
| dataView       | ✅    | DELETED | is.DataView()       |
| NaN            | 🛑   | DELETED | isNaN()             |
| zero           | ✅    |
| primitive      | ✅🆕  |
| promise        | 🛑🆕 |

> Назва - назва методи яку можете використовувати для виклику, щоб перевірити певні види даних.

> Тести - відмічаємо статус чи в проєкті були написати тести для перевірки цієї методи.

> Статус - повідомляємо що методі видалена, але якщо тести помічені що ОК, то значить що цей метод доступний, але має іншу назву і тести теж написані.

> Нова назва - інформує що тепер ця метода має нову назву.

### Список доступних методів які мають іншу роль

| Name | Tests | Status  |
|------|------|---------|
| not  | ✅    |
| or   | ✅    |
| all  | 🛑   | DELETED |

&nbsp;
<center>┉</center>

## Що нового в 3.0.0?

### В цілому:
1. ✅ Новий двигун.
2. ✅ Більше команд.
3. ✅ Краща швидкість виконання команд.
4. ✅ Більше тестів.
5. ✅ Менше коду.
6. ✅ Підтримка CDN

### В деталях:
Видалено декілька команд, до прикладу is.NaN тому, що є системна, яка працює так само, а саме isNaN.
Додана обслуга глобальних контекстів, тобто тепер якщо якоїсь перевірки немає в пакунку, то можеш спробувати всерівно викликати, пакунок спробує знайти те що ти шукаєш і перевірити знайдене з поданим через команду instanceof. Раніше всі команди після крапки починались з малої літери, лише увипадку коли викликаєш зареєстрований зовнішній клас (приклад: is.PersonModel) то в цьому випадку вже як назвав, так і користуєшся, то тепер деякі задекларовані команди теж починаються з великої літери, це через те що ці класи беруться не з пакунку, а з глобального контексту.

### Чому пакунок почав обслуговувати глобальні контексти та які?
1. Тому, що в такому випадку коли вийде нова версія ECMAScript не потрібно буде оновлювати пакунок, щоб почати вже користуватись командами, правда вони не будуть доступні в попередньому перегляді (автозаповнюватись/підповідати), тому що їх ще не задекларовано в інтерфейсі пакунка.
2. Пакунок почав обслуговувати (якщо існують) такі глобальні контексти: globalThis, global, self, window.

### Нові методи які доступні через пакунок, але які лише задекларовані в пакунку, але насправді беруть дані поза пакунком.

#### Загальні

| Name              | Tests |
|-------------------|-------|
| Map               | ✅     |
| String            | 🛑    |
| Date              | ✅     |
| Set               | ✅     |
| URIError          | ✅     |
| RegExp            | ✅     |
| WeakSet           | ✅     |
| WeakMap           | ✅     |
| DataView          | ✅     |
| Float32Array      | 🛑    |
| Int32Array        | 🛑    |
| Uint8ClampedArray | 🛑    |
| Int8Array         | 🛑    |
| Uint8Array        | 🛑    |
| Int16Array        | 🛑    |
| Uint16Array       | 🛑    |
| Uint32Array       | 🛑    |
| Float64Array      | 🛑    |
| BigInt64Array     | 🛑    |
| BigUint64Array    | 🛑    |
| RangeError        | 🛑    |
| Error             | ✅     |
| EvalError         | ✅     |
| ReferenceError    | ✅     |
| SyntaxError       | ✅     |
| TypeError         | ✅     |

#### HTML

| Name                       | Tests |
|----------------------------|-------|
| HTMLAllCollection          | 🛑    |
| HTMLAnchorElement          | 🛑    |
| HTMLAreaElement            | 🛑    |
| HTMLAudioElement           | 🛑    |
| HTMLBRElement              | 🛑    |
| HTMLBaseElement            | 🛑    |
| HTMLBodyElement            | 🛑    |
| HTMLButtonElement          | 🛑    |
| HTMLCanvasElement          | 🛑    |
| HTMLCollection             | 🛑    |
| HTMLDListElement           | 🛑    |
| HTMLDataElement            | 🛑    |
| HTMLDataListElement        | 🛑    |
| HTMLDetailsElement         | 🛑    |
| HTMLDialogElement          | 🛑    |
| HTMLDivElement             | 🛑    |
| HTMLElement                | 🛑    |
| HTMLEmbedElement           | 🛑    |
| HTMLFieldSetElement        | 🛑    |
| HTMLFormControlsCollection | 🛑    |
| HTMLFormElement            | 🛑    |
| HTMLHRElement              | 🛑    |
| HTMLHeadElement            | 🛑    |
| HTMLHeadingElement         | 🛑    |
| HTMLHtmlElement            | 🛑    |
| HTMLIFrameElement          | 🛑    |
| HTMLImageElement           | 🛑    |
| HTMLInputElement           | 🛑    |
| HTMLLIElement              | 🛑    |
| HTMLLabelElement           | 🛑    |
| HTMLLegendElement          | 🛑    |
| HTMLLinkElement            | 🛑    |
| HTMLMapElement             | 🛑    |
| HTMLMediaElement           | 🛑    |
| HTMLMenuElement            | 🛑    |
| HTMLMetaElement            | 🛑    |
| HTMLMeterElement           | 🛑    |
| HTMLModElement             | 🛑    |
| HTMLOListElement           | 🛑    |
| HTMLObjectElement          | 🛑    |
| HTMLOptGroupElement        | 🛑    |
| HTMLOptionElement          | 🛑    |
| HTMLOptionsCollection      | 🛑    |
| HTMLOutputElement          | 🛑    |
| HTMLParagraphElement       | 🛑    |
| HTMLPictureElement         | 🛑    |
| HTMLPreElement             | 🛑    |
| HTMLProgressElement        | 🛑    |
| HTMLQuoteElement           | 🛑    |
| HTMLScriptElement          | 🛑    |
| HTMLSelectElement          | 🛑    |
| HTMLSlotElement            | 🛑    |
| HTMLSourceElement          | 🛑    |
| HTMLSpanElement            | 🛑    |
| HTMLStyleElement           | 🛑    |
| HTMLTableCaptionElement    | 🛑    |
| HTMLTableCellElement       | 🛑    |
| HTMLTableColElement        | 🛑    |
| HTMLTableElement           | 🛑    |
| HTMLTableRowElement        | 🛑    |
| HTMLTableSectionElement    | 🛑    |
| HTMLTemplateElement        | 🛑    |
| HTMLTextAreaElement        | 🛑    |
| HTMLTimeElement            | 🛑    |
| HTMLTitleElement           | 🛑    |
| HTMLTrackElement           | 🛑    |
| HTMLUListElement           | 🛑    |
| HTMLUnknownElement         | 🛑    |
| HTMLVideoElement           | 🛑    |

&nbsp;
<center>┉</center>


## Результат тестування
[<img src="https://i.imgur.com/zGxvooq.png" width="750"/>](https://i.imgur.com/zGxvooq.png)


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

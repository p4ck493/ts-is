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
1. ✅ Типізація.
2. ✅ Зменшення коду в проєкті.
3. ✅ Легше читати та розуміти код. 
4. ✅ Підтримка CDN.
5. ✅ Сумісність з старшими TypeScript версіями (~3.1.1).
6. ✅ Обслуговування глобальних контекстів: globalThis, window, self, global.

## 📝 Зміст

- [ts-is](#ts-is)
    - [Ідея](#-ідея)
    - [Вступ](#вступ)
    - [Зміст](#-зміст)
    - [Інсталювання](#-інсталювання)
    - [CDN](#-cdn)
    - [Використання](#-використання)
        - [Приклади](#приклади)
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
      - [Загальні](#загальні)
      - [HTML](#html)
    - [Сприяння](#-сприяння)
    - [Додаткове](#-додаткове)
    - [Автори](#-автори)
    - [Ліцензія](#-ліцензія)

## 💿 Інсталювання

```sh
npm install @p4ck493/ts-is
```

## 🔗 CDN
```html
<script>var exports = {};</script>
<script src="//unpkg.com/@p4ck493/ts-is@3.0.5/dist/index.js"></script>
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

class PersonModel {
    // Your code ...
}
RegisterInIs()(PersonModel);


class WomanModel extends PersonModel {
    // Your code ...
}
RegisterInIs({
    className: 'woman'
})(PersonModel);

const person = new PersonModel();
const woman = new WomanModel();

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
| false             | ✅     |||
| falsy             | ✅     |||
| function          | ✅     | RETURNED |          | якщо потрібно перевірити, чи є щось із пакета функцією, використовуйте is.Function замість is.function |
| asyncFunction     | 🛑    ||
| generatorFunction | 🛑    ||
| instanceof        | ✅     ||| 
| null              | ✅     |||
| number            | ✅     |||
| object            | ✅     |||
| string            | ✅     |||
| symbol            | ✅     |||
| true              | ✅     |||
| truthy            | ✅     |||
| undefined         | ✅     |||
| NaN               | 🛑    | DELETED  | isNaN()  |
| zero              | ✅     |||
| primitive         | ✅     |          |          | string, number, NaN, bigint, boolean, undefined, symbol, null                                          |
| promise           | 🛑    |||

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


### Методи які доступні через пакунок, але які лише задекларовані в пакунку, але насправді беруть дані поза пакунком.

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

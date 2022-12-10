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

## 🌍 Languages

> 🇺🇦 [ukraine](https://github.com/p4ck493/ts-is/blob/main/README.ua.md) |
> 🇬🇧 [english](https://github.com/p4ck493/ts-is/blob/main/README.md)

## Introduction

### Why you should use and support the package:
1. ✅ Typification.
2. ✅ Reducing the code in the project.
3. ✅ Easier to read and understand the code.
4. ✅ CDN support.
5. ✅ Compatibility with older TypeScript versions (~3.1.1).
6. ✅ Maintenance of global contexts: globalThis, window, self, global.

## 💡 Idea

this package was created in order to simplify writing in typescript / javascript, it often happens that you need to have
checks for different types of data, these checks can be "huge", but if you could simply describe in words what we want
to check?

For example, why write:

```typescript
if (
    typeof variable === 'object' &&
    variable !== null &&
    !Array.isArray(variable) &&
    Object.keys(variable)?.length
) {
}
```

if you can write something like:

```typescript
if (is.object.not.empty(variable)) {
}
```

## 📝 Table of contents

- [ts-is](#ts-is)
    - [Idea](#-idea)
    - [Introduction](#introduction)
    - [Table of contents](#-table-of-contents)
    - [Installation](#-installation)
    - [CDN](#-cdn)
    - [Usage](#-usage)
        - [Example](#examples)
            - [Methods](#methods)
            - [Methods with connection](#methods-with-connection)
            - [Methods with wrappers](#methods-with-wrappers)
            - [Methods with your models](#methods-with-your-models)
            - [Custom method](#custom-method)
        - [Use Cases](#use-cases)
            - [array:filter](#array--filter)
            - [array:some](#array--some)
            - [array:every](#array--every)
            - [observable:pipe:filter](#observable--pipe--filter)
    - [API](#-api)
    - [New methods that are available through the package, but which are only declared in the package, but actually take data from outside the package.](#new-methods-that-are-available-through-the-package-but-which-are-only-declared-in-the-package-but-actually-take-data-from-outside-the-package)
        - [General](#generale)
        - [HTML](#html)
    - [Contributing](#-contributing)
    - [Additional](#-additional)
    - [Authors](#-authors)
    - [License](#-license)

## 💿 Installation

```bash
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

[Back to table of contents](#-table-of-contents)

## 🙌 Usage

```bash
import {is} from "@p4ck493/ts-is";
```

### Examples

#### Syntax

```typescript

$cmd = 'any command';

is[$cmd]();
is[$cmd][$cmd]();
is[$cmd].or[$cmd]();
is[$cmd].not[$cmd]();

$model = 'any model wich declare in package by decorator';

is[$model]();
is[$model][$model]();
is[$model].or[$model]();
is[$model].not[$model]();

// And yes, you can mix:

is[$cmd][$model]();
is[$model].or[$cmd]();
is[$cmd].not[$model]();

```

#### Methods

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

// This method will check if the argument is equal to the base type: Function
is.Function((() => {
})) // true

// This method checks not only if the argument is a function, but also if the argument is an asynchronous function or a generative
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

#### Methods with connection

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

#### Methods with wrappers

```typescript
is.object.not.empty({a: 1}) // true

is.not.object({}) // false

is.not.number(1n) // true

```

[Back to table of contents](#-table-of-contents)

#### Methods with your models

> You have the option to add any class to the package yourself for further testing

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

is.man(person) // false

is.woman(person) // false

is.AddressModel(address) // true

is.woman.or.man(woman) // true

is.not.woman(man) // true

is.not.man(man) // false

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



```

#### Custom method

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

[Back to table of contents](#-table-of-contents)

### Use Cases

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

[Back to table of contents](#-table-of-contents)

## 🗃️ API

### All methods return a boolean type

### List of methods

| Name              | Tests | Status   | New name | Comment                                                                                                              | 
|-------------------|-------|----------|----------|----------------------------------------------------------------------------------------------------------------------|
| array             | ✅     |          |          |
| bigInt            | ✅     |          |          |
| boolean           | ✅     |          |          |
| compare           | ✅     |          |          |
| empty             | ✅     |          |          |
| false             | ✅     |          |          |
| falsy             | ✅     |          |          |
| function          | ✅     | RETURNED |          | if there is a need to check whether something from the package is a function, use is.Function instead of is.function |
| asyncFunction     | 🛑    |          |
| generatorFunction | 🛑    |          |
| instanceof        | ✅     |          |          |
| null              | ✅     |          |          |
| number            | ✅     |          |          |
| object            | ✅     |          |          |
| string            | ✅     |          |          |
| symbol            | ✅     |          |          |
| true              | ✅     |          |          |
| truthy            | ✅     |          |          |
| undefined         | ✅     |          |          |
| NaN               | 🛑    | DELETED  | isNaN()  |
| zero              | ✅     |          |          |
| primitive         | ✅     |          |          | string, number, NaN, bigint, boolean, undefined, symbol, null                                                        |
| promise           | 🛑    |          |          |

> Name - the name of a method that you can call to check certain types of data.

> Tests - note the status of whether tests were written in the project to verify this method.

> Status - we inform you that the method has been deleted, but if the tests are marked as OK, it means that this method
> is available, but has a different name and the tests are also written.

> New name - informs that this method now has a new name.

### List of wrappers and connections

| Name | Tests | Status  |
|------|-------|---------|
| not  | ✅     |
| or   | ✅     |
| all  | 🛑    | DELETED |

### New methods that are available through the package, but which are only declared in the package, but actually take data from outside the package.

#### Generale

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

[Back to table of contents](#-table-of-contents)

## ➕ Additional

If you need to check arguments before executing a function, you can combine the package
with [@p4ck493/ts-type-guard](https://www.npmjs.com/package/@p4ck493/ts-type-guard).

### Example

```typescript

import {TypeGuard} from "@p4ck493/ts-type-guard";

class Person {
    #firstName: string;
    #secondName: string;
    #age: number;
    #somethink: any;

    @TypeGuard([is.string.not.empty])
    public setFirstName(firstName: string): void {
        this.#firstName = firstName;
    }

    @TypeGuard([is.string.not.empty])
    public setSecondName(secondName: string): void {
        this.#secondName = secondName;
    }

    // But it is not necessary to duplicate the check, if it is also the same for 
    // the next argument, then you can not supplement it with new checks, 
    // during the check, the previous one will be taken for the next argument.
    // @TypeGuard([is.string.not.empty]) - is equivalent 
    @TypeGuard([is.string.not.empty, is.string.not.empty])
    public setSomeData(firstName: string, secondName: string): void {
        this.#firstName = firstName;
        this.#secondName = secondName;
    }

    // For optional argument use NULL value.
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

[Back to table of contents](#-table-of-contents)

## 👤 Contributing

[//]: # (Please read [CONTRIBUTING.md]&#40;CONTRIBUTING.md&#41; for details on our code of conduct, and the process for submitting pull requests to us.)

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add your changes: `git add .`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request 😎

## ✍️ Authors

* **Ivan Karbashevskyi** - *Initial work* - [Karbashevskyi](https://github.com/Karbashevskyi)

See also the list of [contributors](https://github.com/p4ck493/ts-is/contributors) who participated in this project.

## 📜 License

[MIT License](https://andreasonny.mit-license.org/2019) © p4ck493

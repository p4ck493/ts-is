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

# ts-is

> 4576 Tests

## Prerequisites

this package was created in order to simplify writing in typescript / javascript, it often happens that you need to have
checks for different types of data, these checks can be "huge", but if you could simply describe in words what we want
to check?

For example, why write:

```typescript
if (
    typeof variable === 'object' &&
    variable !== null &&
    !Array.isArray(variable)
) {
}
```

if you can write something like:

```typescript
if (is.object(variable)) {
}
```

## Table of contents

- [ts-is](#ts-is)
    - [Prerequisites](#prerequisites)
    - [Table of contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
        - [Import](#import)
        - [Example](#example)
            - [Methods](#methods)
            - [Methods with connection](#methods-with-connection)
            - [Methods with wrappers](#methods-with-wrappers)
            - [Methods with wrappers and connection](#methods-with-wrappers-and-connection)
            - [Methods with your models](#methods-with-your-models)
            - [Custom method](#custom-method)
        - [Use Cases](#use-cases)
          - [array:filter](#arrayfilter)
          - [observable:pipe:filter](#observablepipefilter)
    - [API](#api)
    - [Contributing](#contributing)
    - [Authors](#authors)
    - [License](#license)

## Installation

```sh
npm install @p4ck493/ts-is
```

## Usage

### Import

```sh
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
is[$cmd].all[$cmd]();
is[$cmd].all.not[$cmd]();

$model = 'any model wich declare in pacakge by decorator';

is[$model]();
is[$model][$model]();
is[$model].or[$model]();
is[$model].not[$model]();
is[$model].all[$model]();
is[$model].all.not[$model]();

// And yes, you can mix:

is[$cmd][$model]();
is[$model].or[$cmd]();
is[$cmd].not[$model]();
is[$model].all[$cmd]();
is[$cmd].all.not[$model]();

```

#### Methods

```typescript
is.array([]) // true

is.bigInt(1n) // true

is.boolean(false) // true

is.compare({a: 1}, {a: 1}) // true

is.empty('') // true

is.false(false) // true

is.falsy('') // true 

is.function((() => {
})) // true

is.instanceof((new Boolean(false)), Boolean) // true

is.null(null) // true

is.number(0) // true

is.object({}) // true

is.string('') // true

is.symbol(Symbol()) // true

is.true(true) // true

is.truthy(1) // true

is.undefined(undefined) // true

```

#### Methods with connection

```typescript
is.array.empty([]) // true

is.bigInt.or.number(-1) // true

is.boolean.or.truthy('false') // true

is.false.or.falsy('') // true 

is.null.or.undefined(null) // true

is.object.or.function({}) // true

is.string.or.true.or.symbol(true) // true
```

#### Methods with wrappers

```typescript
is.object.not.empty({a: 1}) // true

is.not.object({}) // false

is.all.string(['qwerty', [['qwerty_1'], 'qwerty_2']]) // true

is.not.number(1n) // true

is.all.true([true, [true], [true, false]]) // false

is.all.not.null(['qwerty', ['qwerty_1', 100], Symbol()]) // true

is.all.not.undefined([200, [Symbol()], [true], undefined, null, 'string']) // false
```

#### Methods with wrappers and connection

```typescript
is.all.not.null.or.undefined([1, 2, 3, 4, 5, ['string'], Symbol()]) // true
is.all.not.null.or.undefined.empty([5, 4, 3, 2, 1, [''], Symbol()]) // false
```

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

is.AddressModel(address) // true

is.woman.or.man(woman) // true

is.not.woman(man) // true

is.not.man(man) // false

is.all.person([person, [man], [woman]]) // true

is.all.not.AddressModel([[person], [woman], [man]]) // true
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

## API

### All methods return a boolean type

### List of methods

| Name             | Test |
|------------------|------|
| array            | ✅    |
| bigInt           | ✅    |     
| boolean          | ✅    |     
| compare          | ✅    |     
| date             | ✅    |
| empty            | ✅    |     
| error            | ✅    |
| evalError        | ✅    |
| false            | ✅    |     
| falsy            | ✅    |     
| function         | ✅    |     
| instanceof       | ✅    |
| map              | ✅    |     
| null             | ✅    |     
| number           | ✅    |     
| object           | ✅    |     
| referenceError   | ✅    |
| regExpError      | ✅    |
| set              | ✅    |
| string           | ✅    |     
| symbol           | ✅    |     
| syntaxError      | ✅    |
| true             | ✅    |     
| truthy           | ✅    |     
| typeError        | ✅    |
| undefined        | ✅    |     
| URIError         | ✅    |
| weakSet          | ✅🆕  |
| weakMap          | ✅🆕  |
| dataView         | ✅🆕  |
| broadcastChannel | ✅🆕  |

### List of wrappers and connections

| Name | Test |
|------|------|
| not  | ✅    |
| all  | ✅    |
| or   | ✅    |

## Contributing

[//]: # (Please read [CONTRIBUTING.md]&#40;CONTRIBUTING.md&#41; for details on our code of conduct, and the process for submitting pull requests to us.)

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add your changes: `git add .`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request 😎

## Authors

* **Ivan Karbashevskyi** - *Initial work* - [Karbashevskyi](https://github.com/Karbashevskyi)

See also the list of [contributors](https://github.com/p4ck493/ts-is/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © p4ck493

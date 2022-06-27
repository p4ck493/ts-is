# @p4ck493/ts-is
2655 Tests

![NPM Latest Version](https://img.shields.io/npm/v/@p4ck493/ts-is)
![Downloads Count](https://img.shields.io/npm/dm/@p4ck493/ts-is.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=@p4ck493/ts-is)
![Test Status](https://img.shields.io/travis/p4ck493/ts-is/main.svg)
![Last Update Date](https://img.shields.io/github/last-commit/p4ck493/ts-is)
![Project License](https://img.shields.io/github/license/p4ck493/ts-is)

## Installation

```bash
$ npm install @p4ck493/ts-is
```

## Import

```typescript
import {Is} from "@p4ck493/ts-is";
```


## Some examples:

```typescript

    import {RegisterInIs} from './index';
    
    Is.Null("unknown") // Return false
    Is.Not.Null("unknown") // Return true
    Is.Number(0) // Return true
    Is.Number("0") // Return false
    Is.Not.Number(0) // Return false
    Is.Not.Number("0") // Return true
    Is.Not.Number(NaN) // Return true
    Is.Number(NaN) // Return false
    
    // Why do you need to use the package?
    // because you don't want to write like this:
    if (
        typeof variable === 'object' &&
        variable !== null &&
        !Array.isArray(variable)
    ) {
    
    }
    
    // but you want to write like this:
    if (Is.Object(variable)) {
    
    }
    
    // Below another examples
    
    Is.Function(variable)
    // Use generic if you need to specific type after "if"
    Is.Function<typeof variable>(variable)
    Is.Function<FunctionName>(variable)
    
    Is.Array(variable)
    
    Is.All.Boolean([true, false, [true, [false]], 0]) // Result is false beacouse in array exist 0
    Is.All.Not.Boolean([true, false, [true, [false]], 0]) // Result is true beacouse in array exist 0
    
    // Another cases
    
    // Or
    Is.Null.Or.Undefined(variable)
    Is.Undefined.Or.Null.Or.Empty(variable)
    Is.Not.Null.Or.Undefined.Or.Boolean(variable)
    Is.All.Number.Or.String(variable)
    
    // Case with model
    Is.Person.Or.Address(variable)
    Is.Not.Address.Or.AnotherModel(variable)
    Is.All.Person.Or.AnotherModel(variable)
    Is.All.Not.AnotherModel.Or.Address(variable)
    
    // Is.Falsy will return true in these cases: false, null, undefined, 0, -0, NaN, "", '', ``; 
    // Is.Truthy will return true in these cases: [], 'undefined', 'null', Symbol(), true, BigInt(1), {}, Function, () => {}, BigInt, Symbol;
    
    // Also, if you need to test some models, you can register the models for packaging and use them:
    
    @RegisterInIs()
    class PersonModel {
    
    }
    
    @RegisterInIs({
        className: 'Address'
    })
    class AddressModel {
    
    }
    
    Is.PersonModel(new PersonModel()) // Returns true
    Is.PersonModel(new Address()) // Returns false
    
    Is.Not.PersonModel(new PersonModel()) // Returns false
    Is.Not.PersonModel(new Address()) // Returns true
    
    Is.All.PersonModel([new PersonModel(), new PersonModel()]) // Returns true
    Is.All.PersonModel([new Address(), new PersonModel()]) // Returns false
    
    Is.All.Not.Address([new PersonModel(), new PersonModel()]) // Returns true
    Is.All.Not.Address([new Address(), new PersonModel()]) // Returns true
    Is.All.Not.Address([new Address(), new Address()]) // Returns false

    @RegisterInIs()
    class ManModel extends PersonModel {

    }

    Is.PersonModel(new ManModel()) // Returns true
    Is.ManModel(new ManModel()) // Returns true
    Is.ManModel(new Address()) // Returns false

```


## API
### All methods return boolean

| #        | Name of method                                      | Argument        | Test | Old name                          |
|----------|-----------------------------------------------------|-----------------|------|-----------------------------------|
|          | **Is**                                              |                 |      |                                   |
| 1        | Is.Array                                            | argument: any   | ✔    |                                   |
| 2        | Is.BigInt                                           | argument: any   | ✔    |                                   |
| 3        | Is.Boolean                                          | argument: any   | ✔    |                                   |
| 4        | Is.Compare                                          | argument: any   | ✔    |                                   |
| 5        | Is.EmptyArray                                       | argument: any   | ✔    |                                   |
| 6        | Is.EmptyObject                                      | argument: any   | ✔    |                                   |
| 7        | Is.EmptyString                                      | argument: any   | ✔    |                                   |
| 8        | Is.False                                            | argument: any   | ✔    |                                   |
| 9        | Is.Falsy                                            | argument: any   | ✔    |                                   |
| 10       | Is.Function                                         | argument: any   | ✔    |                                   |
| 11       | Is.Null                                             | argument: any   | ✔    |                                   |
| 12 (upd) | Is.Null.Or.Undefined                                | argument: any   | ✔    | Is.NullOrUndefined                |
| 13 (upd) | Is.Null.Or.Undefined.Or.Empty                       | argument: any   | ✔    | Is.NullOrUndefinedOrEmpty         |
| 14       | Is.Number                                           | argument: any   | ✔    |                                   |
| 15       | Is.String                                           | argument: any   | ✔    |                                   |
| 16       | Is.Object                                           | argument: any   | ✔    |                                   |
| 17       | Is.True                                             | argument: any   | ✔    |                                   |
| 18       | Is.Truthy                                           | argument: any   | ✔    |                                   |
| 19       | Is.Symbol                                           | argument: any   | ✔    |                                   |
| 20       | Is.Undefined                                        | argument: any   | ✔    |                                   |
| 21       | Is.Empty                                            | argument: any   | ✔    | UniversalEmptyChecker             |
| 22       | Is.[ClassName]                                      | argument: any   | ✔    |                                   |
| 23 (new) | Is.[Method/ClassName].Or.[Method/ClassName]         | argument: any   | ✔    |                                   |
|          | **Is.Not**                                          |                 |      |                                   |
| 24       | Is.Not.Array                                        | argument: any   | ✔    |                                   |
| 25       | Is.Not.BigInt                                       | argument: any   | ✔    |                                   |
| 26       | Is.Not.Boolean                                      | argument: any   | ✔    |                                   |
| 27       | Is.Not.Compare                                      | argument: any   | ✔    |                                   |
| 28       | Is.Not.EmptyArray                                   | argument: any   | ✔    |                                   |
| 29       | Is.Not.EmptyObject                                  | argument: any   | ✔    |                                   |
| 30       | Is.Not.EmptyString                                  | argument: any   | ✔    |                                   |
| 31       | Is.Not.False                                        | argument: any   | ✔    |                                   |
| 32       | Is.Not.False                                        | argument: any   | ✔    |                                   |
| 33       | Is.Not.Function                                     | argument: any   | ✔    |                                   |
| 34       | Is.Not.Null                                         | argument: any   | ✔    |                                   |
| 35 (upd) | Is.Not.Null.Or.Undefined                            | argument: any   | ✔    | Is.Not.NullOrUndefined            |
| 36 (upd) | Is.Not.Null.Or.Undefined.Or.Empty                   | argument: any   | ✔    | Is.Not.NullOrUndefinedOrEmpty     |
| 37       | Is.Not.Number                                       | argument: any   | ✔    |                                   |
| 38       | Is.Not.String                                       | argument: any   | ✔    |                                   |
| 39       | Is.Not.Object                                       | argument: any   | ✔    |                                   |
| 40       | Is.Not.True                                         | argument: any   | ✔    |                                   |
| 41       | Is.Not.Truthy                                       | argument: any   | ✔    |                                   |
| 42       | Is.Not.Symbol                                       | argument: any   | ✔    |                                   |
| 43       | Is.Not.Undefined                                    | argument: any   | ✔    |                                   |
| 44       | Is.Not.Empty                                        | argument: any   | ✔    | UniversalEmptyChecker             |
| 45       | Is.Not.[ModelName/ClassName]                        | argument: any   | ✔    |                                   |
| 46 (new) | Is.Not.[Method].Or.[Method]                         | argument: any   | ✔    |                                   |
|          | **Is.All**                                          |                 |      |                                   |
| 47       | Is.All.Array                                        | argument: any[] | ✔    |                                   |
| 48       | Is.All.BigInt                                       | argument: any[] | ✔    |                                   |
| 49       | Is.All.Boolean                                      | argument: any[] | ✔    |                                   |
| 50       | Is.All.Compare                                      | argument: any[] | x    |                                   |
| 51       | Is.All.EmptyArray                                   | argument: any[] | ✔    |                                   |
| 52       | Is.All.EmptyObject                                  | argument: any[] | ✔    |                                   |
| 53       | Is.All.EmptyString                                  | argument: any[] | ✔    |                                   |
| 54       | Is.All.False                                        | argument: any[] | ✔    |                                   |
| 55       | Is.All.Falsy                                        | argument: any[] | ✔    |                                   |
| 56       | Is.All.Function                                     | argument: any[] | ✔    |                                   |
| 57       | Is.All.Null                                         | argument: any[] | ✔    |                                   |
| 58 (upd) | Is.All.Null.Or.Undefined                            | argument: any[] | x    | Is.All.NullOrUndefined            |
| 59 (upd) | Is.All.Null.Or.Undefined.Or.Empty                   | argument: any[] | x    | Is.All.NullOrUndefinedOrEmpty     |
| 60       | Is.All.Number                                       | argument: any[] | ✔    |                                   |
| 61       | Is.All.String                                       | argument: any[] | ✔    |                                   |
| 62       | Is.All.Object                                       | argument: any[] | ✔    |                                   |
| 63       | Is.All.True                                         | argument: any[] | ✔    |                                   |
| 64       | Is.All.Truthy                                       | argument: any[] | ✔    |                                   |
| 65       | Is.All.Symbol                                       | argument: any[] | ✔    |                                   |
| 66       | Is.All.Undefined                                    | argument: any[] | ✔    |                                   |
| 67       | Is.All.Empty                                        | argument: any[] | ✔    | UniversalEmptyChecker             |
| 68       | Is.All.[ClassName]                                  | argument: any[] | ✔    |                                   |
| 69 (new) | Is.All.[Method/ClassName].Or.[Method/ClassName]     | argument: any[] | ✔    |                                   |
|          | **Is.All.Not**                                      |                 |      |                                   |
| 70       | Is.All.Not.Array                                    | argument: any[] | ✔    |                                   |
| 71       | Is.All.Not.BigInt                                   | argument: any[] | ✔    |                                   |
| 72       | Is.All.Not.Boolean                                  | argument: any[] | ✔    |                                   |
| 73       | Is.All.Not.Compare                                  | argument: any[] | x    |                                   |
| 74       | Is.All.Not.EmptyArray                               | argument: any[] | ✔    |                                   |
| 74       | Is.All.Not.EmptyObject                              | argument: any[] | ✔    |                                   |
| 75       | Is.All.Not.EmptyString                              | argument: any[] | ✔    |                                   |
| 76       | Is.All.Not.False                                    | argument: any[] | ✔    |                                   |
| 77       | Is.All.Not.Falsy                                    | argument: any[] | ✔    |                                   |
| 78       | Is.All.Not.Function                                 | argument: any[] | ✔    |                                   |
| 79       | Is.All.Not.Null                                     | argument: any[] | ✔    |                                   |
| 80 (upd) | Is.All.Not.Null.Or.Undefined                        | argument: any[] | x    | Is.All.Not.NullOrUndefined        |
| 81 (upd) | Is.All.Not.Null.Or.Undefined.Or.Empty               | argument: any[] | x    | Is.All.Not.NullOrUndefinedOrEmpty |
| 82       | Is.All.Not.Number                                   | argument: any[] | ✔    |                                   |
| 83       | Is.All.Not.String                                   | argument: any[] | ✔    |                                   |
| 84       | Is.All.Not.Object                                   | argument: any[] | ✔    |                                   |
| 85       | Is.All.Not.True                                     | argument: any[] | ✔    |                                   |
| 86       | Is.All.Not.Truthy                                   | argument: any[] | ✔    |                                   |
| 87       | Is.All.Not.Symbol                                   | argument: any[] | ✔    |                                   |
| 88       | Is.All.Not.Undefined                                | argument: any[] | ✔    |                                   |
| 89       | Is.All.Not.Empty                                    | argument: any[] | ✔    | UniversalEmptyChecker             |
| 90       | Is.All.Not.[ClassName]                              | argument: any[] | ✔    |                                   |
| 91 (new) | Is.All.Not.[Method/ClassName].Or.[Method/ClassName] | argument: any[] | x    |                                   |


## API Tools

| #   | Name of method | Argument                                 | Test | Return        |
|-----|----------------|------------------------------------------|------|---------------|
| 1   | findKey        | argument: {[key: string]: {}}, value: {} | ✔    | string / null |


## Tests
```
Test Suites: 71 passed, 71 total
Tests:       2745 passed, 2745 total
Snapshots:   0 total
Time:        5.371 s
Ran all test suites.

```

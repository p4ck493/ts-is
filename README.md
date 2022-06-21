# @p4ck493/ts-is
1390 Tests

![NPM Latest Version](https://img.shields.io/npm/v/p4ck493/ts-is)
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
    
    // What's new?
    
    // Is.Falsy will return true in these cases: false, null, undefined, 0, -0, NaN, "", '', ``; 
    // Is.Truthy will return true in these cases: [], 'undefined', 'null', Symbol(), true, BigInt(1), {}, Function, () => {}, BigInt, Symbol; 
    
    // Now you can write like this:
    
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

| #        | Name of method                    | Argument        | Test | Old name              |
|----------|-----------------------------------|-----------------|------|-----------------------|
|          | **Is**                            |                 |      |                       |
| 1        | Is.Array                          | argument: any   | ✔    |                       |
| 2        | Is.BigInt                         | argument: any   | ✔    |                       |
| 3        | Is.Boolean                        | argument: any   | ✔    |                       |
| 4        | Is.Compare                        | argument: any   | ✔    |                       |
| 5        | Is.EmptyObject                    | argument: any   | ✔    |                       |
| 6        | Is.EmptyString                    | argument: any   | ✔    |                       |
| 7        | Is.False                          | argument: any   | ✔    |                       |
| 8 (new)  | Is.Falsy                          | argument: any   | ✔    |                       |
| 9        | Is.Function                       | argument: any   | ✔    |                       |
| 10       | Is.Null                           | argument: any   | ✔    |                       |
| 11       | Is.NullOrUndefined                | argument: any   | ✔    |                       |
| 12       | Is.NullOrUndefinedOrEmpty         | argument: any   | ✔    |                       |
| 13       | Is.Number                         | argument: any   | ✔    |                       |
| 14       | Is.String                         | argument: any   | ✔    |                       |
| 15       | Is.Object                         | argument: any   | ✔    |                       |
| 16       | Is.True                           | argument: any   | ✔    |                       |
| 17 (new) | Is.Truthy                         | argument: any   | ✔    |                       |
| 18       | Is.Symbol                         | argument: any   | ✔    |                       |
| 19       | Is.Undefined                      | argument: any   | ✔    |                       |
| 20 (upd) | Is.Empty                          | argument: any   | x    | UniversalEmptyChecker |
| 21 (new) | Is.[ModelName/ClassName]          | argument: any   | ✔    |                       |
|          | **Is.Not**                        |                 |      |                       |
| 20       | Is.Not.Array                      | argument: any   | ✔    |                       |
| 21       | Is.Not.BigInt                     | argument: any   | ✔    |                       |
| 22       | Is.Not.Boolean                    | argument: any   | ✔    |                       |
| 23       | Is.Not.Compare                    | argument: any   | ✔    |                       |
| 24       | Is.Not.EmptyObject                | argument: any   | ✔    |                       |
| 25       | Is.Not.EmptyString                | argument: any   | ✔    |                       |
| 26       | Is.Not.False                      | argument: any   | ✔    |                       |
| 27 (new) | Is.Not.False                      | argument: any   | ✔    |                       |
| 28       | Is.Not.Function                   | argument: any   | ✔    |                       |
| 29       | Is.Not.Null                       | argument: any   | ✔    |                       |
| 30       | Is.Not.NullOrUndefined            | argument: any   | ✔    |                       |
| 31       | Is.Not.NullOrUndefinedOrEmpty     | argument: any   | ✔    |                       |
| 32       | Is.Not.Number                     | argument: any   | ✔    |                       |
| 33       | Is.Not.String                     | argument: any   | ✔    |                       |
| 34       | Is.Not.Object                     | argument: any   | ✔    |                       |
| 35       | Is.Not.True                       | argument: any   | ✔    |                       |
| 36 (new) | Is.Not.Truthy                     | argument: any   | ✔    |                       |
| 37       | Is.Not.Symbol                     | argument: any   | ✔    |                       |
| 38       | Is.Not.Undefined                  | argument: any   | ✔    |                       |
| 39 (upd) | Is.Not.Empty                      | argument: any   | x    | UniversalEmptyChecker |
| 40 (new) | Is.Not.[ModelName/ClassName]      | argument: any   | ✔    |                       |
|          | **Is.All**                        |                 |      |                       |
| 41       | Is.All.Array                      | argument: any[] | ✔    |                       |
| 42       | Is.All.BigInt                     | argument: any[] | ✔    |                       |
| 43       | Is.All.Boolean                    | argument: any[] | ✔    |                       |
| 44       | Is.All.Compare                    | argument: any[] | x    |                       |
| 45       | Is.All.EmptyObject                | argument: any[] | ✔    |                       |
| 46       | Is.All.EmptyString                | argument: any[] | ✔    |                       |
| 47       | Is.All.False                      | argument: any[] | ✔    |                       |
| 48 (new) | Is.All.Falsy                      | argument: any[] | x    |                       |
| 49       | Is.All.Function                   | argument: any[] | ✔    |                       |
| 50       | Is.All.Null                       | argument: any[] | ✔    |                       |
| 51       | Is.All.NullOrUndefined            | argument: any[] | x    |                       |
| 52       | Is.All.NullOrUndefinedOrEmpty     | argument: any[] | x    |                       |
| 53       | Is.All.Number                     | argument: any[] | ✔    |                       |
| 54       | Is.All.String                     | argument: any[] | ✔    |                       |
| 55       | Is.All.Object                     | argument: any[] | ✔    |                       |
| 56       | Is.All.True                       | argument: any[] | ✔    |                       |
| 57 (new) | Is.All.Truthy                     | argument: any[] | x    |                       |
| 58       | Is.All.Symbol                     | argument: any[] | ✔    |                       |
| 59       | Is.All.Undefined                  | argument: any[] | ✔    |                       |
| 60 (upd) | Is.All.Empty                      | argument: any[] | x    | UniversalEmptyChecker |
| 61 (new) | Is.All.[ModelName/ClassName]      | argument: any[] | ✔    |                       |
|          | **Is.All.Not**                    |                 |      |                       |
| 62       | Is.All.Not.Array                  | argument: any[] | ✔    |                       |
| 63       | Is.All.Not.BigInt                 | argument: any[] | ✔    |                       |
| 64       | Is.All.Not.Boolean                | argument: any[] | ✔    |                       |
| 65       | Is.All.Not.Compare                | argument: any[] | x    |                       |
| 66       | Is.All.Not.EmptyObject            | argument: any[] | ✔    |                       |
| 67       | Is.All.Not.EmptyString            | argument: any[] | ✔    |                       |
| 68       | Is.All.Not.False                  | argument: any[] | ✔    |                       |
| 69 (new) | Is.All.Not.Falsy                  | argument: any[] | x    |                       |
| 70       | Is.All.Not.Function               | argument: any[] | ✔    |                       |
| 71       | Is.All.Not.Null                   | argument: any[] | ✔    |                       |
| 72       | Is.All.Not.NullOrUndefined        | argument: any[] | x    |                       |
| 73       | Is.All.Not.NullOrUndefinedOrEmpty | argument: any[] | x    |                       |
| 74       | Is.All.Not.Number                 | argument: any[] | ✔    |                       |
| 75       | Is.All.Not.String                 | argument: any[] | ✔    |                       |
| 76       | Is.All.Not.Object                 | argument: any[] | ✔    |                       |
| 77       | Is.All.Not.True                   | argument: any[] | ✔    |                       |
| 78 (new) | Is.All.Not.Truthy                 | argument: any[] | x    |                       |
| 79       | Is.All.Not.Symbol                 | argument: any[] | ✔    |                       |
| 80       | Is.All.Not.Undefined              | argument: any[] | ✔    |                       |
| 81 (upd) | Is.All.Not.Empty                  | argument: any[] | x    | UniversalEmptyChecker |
| 82 (new) | Is.All.Not.[ModelName/ClassName]  | argument: any[] | ✔    |                       |


## API Tools

| #   | Name of method | Argument                                 | Test | Return        |
|-----|----------------|------------------------------------------|------|---------------|
| 1   | findKey        | argument: {[key: string]: {}}, value: {} | ✔    | string / null |

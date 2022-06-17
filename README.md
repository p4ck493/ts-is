# @p4ck493/ts-is
![NPM Latest Version](https://img.shields.io/npm/v/p4ck493/ts-is)
![Downloads Count](https://img.shields.io/npm/dm/p4ck493/ts-is.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=p4ck493/ts-is)
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



## API
| #   | Name of method                    | Argument        | Return type |
|-----|-----------------------------------|-----------------|-------------|
|     | **Is**                            |                 |             |
| 1   | Is.Array                          | argument: any   | Boolean     |
| 2   | Is.BigInt                         | argument: any   | Boolean     |
| 3   | Is.Boolean                        | argument: any   | Boolean     |
| 4   | Is.Compare                        | argument: any   | Boolean     |
| 5   | Is.EmptyObject                    | argument: any   | Boolean     |
| 6   | Is.EmptyString                    | argument: any   | Boolean     |
| 7   | Is.False                          | argument: any   | Boolean     |
| 8   | Is.Function                       | argument: any   | Boolean     |
| 9   | Is.Null                           | argument: any   | Boolean     |
| 10  | Is.NullOrUndefined                | argument: any   | Boolean     |
| 11  | Is.NullOrUndefinedOrEmpty         | argument: any   | Boolean     |
| 12  | Is.Number                         | argument: any   | Boolean     |
| 13  | Is.String                         | argument: any   | Boolean     |
| 14  | Is.Object                         | argument: any   | Boolean     |
| 15  | Is.True                           | argument: any   | Boolean     |
| 16  | Is.Symbol                         | argument: any   | Boolean     |
| 17  | Is.Undefined                      | argument: any   | Boolean     |
| 18  | Is.UniversalEmptyChecker          | argument: any   | Boolean     |
|     | **Is.Not**                        |                 |             |
| 19  | Is.Not.Array                      | argument: any   | Boolean     |
| 20  | Is.Not.BigInt                     | argument: any   | Boolean     |
| 21  | Is.Not.Boolean                    | argument: any   | Boolean     |
| 22  | Is.Not.Compare                    | argument: any   | Boolean     |
| 23  | Is.Not.EmptyObject                | argument: any   | Boolean     |
| 24  | Is.Not.EmptyString                | argument: any   | Boolean     |
| 25  | Is.Not.False                      | argument: any   | Boolean     |
| 26  | Is.Not.Function                   | argument: any   | Boolean     |
| 27  | Is.Not.Null                       | argument: any   | Boolean     |
| 28  | Is.Not.NullOrUndefined            | argument: any   | Boolean     |
| 29  | Is.Not.NullOrUndefinedOrEmpty     | argument: any   | Boolean     |
| 30  | Is.Not.Number                     | argument: any   | Boolean     |
| 31  | Is.Not.String                     | argument: any   | Boolean     |
| 32  | Is.Not.Object                     | argument: any   | Boolean     |
| 33  | Is.Not.True                       | argument: any   | Boolean     |
| 34  | Is.Not.Symbol                     | argument: any   | Boolean     |
| 35  | Is.Not.Undefined                  | argument: any   | Boolean     |
| 36  | Is.Not.UniversalEmptyChecker      | argument: any   | Boolean     |
|     | **Is.All**                        |                 |             |
| 37  | Is.All.Array                      | argument: any[] | Boolean     |
| 38  | Is.All.BigInt                     | argument: any[] | Boolean     |
| 39  | Is.All.Boolean                    | argument: any[] | Boolean     |
| 40  | Is.All.Compare                    | argument: any[] | Boolean     |
| 41  | Is.All.EmptyObject                | argument: any[] | Boolean     |
| 42  | Is.All.EmptyString                | argument: any[] | Boolean     |
| 43  | Is.All.False                      | argument: any[] | Boolean     |
| 44  | Is.All.Function                   | argument: any[] | Boolean     |
| 45  | Is.All.Null                       | argument: any[] | Boolean     |
| 46  | Is.All.NullOrUndefined            | argument: any[] | Boolean     |
| 47  | Is.All.NullOrUndefinedOrEmpty     | argument: any[] | Boolean     |
| 48  | Is.All.Number                     | argument: any[] | Boolean     |
| 49  | Is.All.String                     | argument: any[] | Boolean     |
| 50  | Is.All.Object                     | argument: any[] | Boolean     |
| 51  | Is.All.True                       | argument: any[] | Boolean     |
| 52  | Is.All.Symbol                     | argument: any[] | Boolean     |
| 53  | Is.All.Undefined                  | argument: any[] | Boolean     |
| 54  | Is.All.UniversalEmptyChecker      | argument: any[] | Boolean     |
|     | **Is.All.Not**                    |                 |             |
| 55  | Is.All.Not.Array                  | argument: any[] | Boolean     |
| 56  | Is.All.Not.BigInt                 | argument: any[] | Boolean     |
| 57  | Is.All.Not.Boolean                | argument: any[] | Boolean     |
| 58  | Is.All.Not.Compare                | argument: any[] | Boolean     |
| 59  | Is.All.Not.EmptyObject            | argument: any[] | Boolean     |
| 60  | Is.All.Not.EmptyString            | argument: any[] | Boolean     |
| 61  | Is.All.Not.False                  | argument: any[] | Boolean     |
| 62  | Is.All.Not.Function               | argument: any[] | Boolean     |
| 63  | Is.All.Not.Null                   | argument: any[] | Boolean     |
| 64  | Is.All.Not.NullOrUndefined        | argument: any[] | Boolean     |
| 65  | Is.All.Not.NullOrUndefinedOrEmpty | argument: any[] | Boolean     |
| 66  | Is.All.Not.Number                 | argument: any[] | Boolean     |
| 67  | Is.All.Not.String                 | argument: any[] | Boolean     |
| 68  | Is.All.Not.Object                 | argument: any[] | Boolean     |
| 69  | Is.All.Not.True                   | argument: any[] | Boolean     |
| 70  | Is.All.Not.Symbol                 | argument: any[] | Boolean     |
| 71  | Is.All.Not.Undefined              | argument: any[] | Boolean     |
| 72  | Is.All.Not.UniversalEmptyChecker  | argument: any[] | Boolean     |

## Some examples:
```typescript

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


  Is.All.Boolean([true, false, [true, [false]], 0]) // Result is false beacouse in array exist 0
  Is.All.Not.Boolean([true, false, [true, [false]], 0]) // Result is true beacouse in array exist 0

```

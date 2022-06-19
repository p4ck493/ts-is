import {afterWrapperType, beforeWrapperType, typeWrapperType} from '../types/wrapper.type';
import {afterWrappers, beforeWrappers, typeWrappers} from '../wrappers';
import {FlagsToolInterface} from '../interfaces/tools/flags.tool.interface';
import {CaseToolConst} from '../consts/tools/case.tool.const';
import {CaseToolEnum} from '../enums/tools/case.tool.enum';
import {CompareMethod} from '../methods/compare.method';

function initWrappers(
    name: string,
    flags: FlagsToolInterface,
    typeWrapperList: typeWrapperType[],
    beforeWrapperList: beforeWrapperType[],
    afterWrapperList: afterWrapperType[]
) {

    flags.TypeWrapper = typeWrappers.hasOwnProperty(name);
    flags.BeforeWrapper = beforeWrappers.hasOwnProperty(name);
    flags.AfterWrapper = afterWrappers.hasOwnProperty(name);

    const notFoundWrapperInAnyWrappers: boolean[] = [
        flags.TypeWrapper,
        flags.BeforeWrapper,
        flags.AfterWrapper
    ];

    if (flags.TypeWrapper) {
        typeWrapperList.push(typeWrappers[name as keyof (typeof typeWrappers)]);
    }

    if (flags.BeforeWrapper) {
        beforeWrapperList.push(beforeWrappers[name as keyof (typeof beforeWrappers)]);
    }

    if (flags.AfterWrapper) {
        afterWrapperList.push(afterWrappers[name as keyof (typeof afterWrappers)]);
    }

    if (notFoundWrapperInAnyWrappers.every((item: boolean) => !item)) {
        throw new Error(`Not found propery with name: ${name}`);
    }

}



// GET

type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;

function proxyRecursiveGet(
    flags: FlagsToolInterface,
    typeWrapperList: typeWrapperType[],
    beforeWrapperList: beforeWrapperType[],
    afterWrapperList: afterWrapperType[],
): proxyRecursiveGetType {
    return (targetGet, nameGet) => {
        return proxyRecursive(targetGet[nameGet], nameGet, targetGet, flags, beforeWrapperList, typeWrapperList, afterWrapperList);
    };
}

// APPLY

type proxyRecursiveApplyType = (targetApply: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]) => ReturnType<typeof targetApply>;

/**
 * Case #1 Model
 * Is.Person(...)
 *
 * Case #2 Method
 * Is.Boolean(...)
 *
 * Case #3 After Wrapper & Method
 * Is.Not.Boolean(...)
 *
 * Case #4 Before Wrapper & Method
 * Is.All.Boolean(...)
 *
 * Case #5 Before & After Wrapper & Method
 * Is.All.Not.Boolean(...)
 *
 * Case #6 Model & Method
 * Is.Person.Array(...)
 *
 * Case #7 Before Wrapper & Model
 * Is.All.Person(...)
 *
 * Case #8 After Wrapper & Model
 * Is.Not.Person(...)
 *
 * Case #9 After Wrapper & Model & Method
 * Is.Not.Person.Array(...)
 *
 * Case #10 Before & After Wrapper & Model & Method
 * Is.All.Not.Person.Array([[new Person],[0], [new Person]]) // Returns true
 */
function proxyRecursiveApply(
    flags: FlagsToolInterface,
    typeWrapperList: typeWrapperType[],
    beforeWrapperList: beforeWrapperType[],
    afterWrapperList: afterWrapperType[],
): proxyRecursiveApplyType {
    return (targetApply, thisArg, argumentList) => {

        // TODO build switch for cases

        const index = Object.values(CaseToolConst).findIndex((item) => CompareMethod<FlagsToolInterface>(item, flags));
        const key = CaseToolEnum[Object.keys(CaseToolConst)[index] as keyof (typeof CaseToolEnum)];

        switch (key) {
            case CaseToolEnum.AfterWrapperAndModelAndMethod:
                // TODO
                break;
            case CaseToolEnum.BeforeWrapperAndMethod:
                // TODO
                break;
            case CaseToolEnum.ModelAndMethod:
                // TODO
                break;
            case CaseToolEnum.BeforeAndAfterWrapperAndMethod:
                // TODO
                break;
            case CaseToolEnum.BeforeWrapperAndModel:
                // TODO
                break;
            case CaseToolEnum.Model:
                // TODO
                break;
            case CaseToolEnum.AfterWrapperAndModel:
                // TODO
                break;
            case CaseToolEnum.Method:
                // TODO
                break;
            case CaseToolEnum.AfterWrapperAndMethod:
                // TODO
                break;
            case CaseToolEnum.BeforeAndAfterWrapperAndModelAndMethod:
                // TODO
                break;
        }

        // OLD

        argumentList.push(...(typeWrapperList ?? []));
        let result;

        if (beforeWrapperList?.length) {
            result = beforeWrapperList.reduce((previousValue: any, currentValue: any) => {
                return currentValue(targetApply, argumentList, previousValue)
            }, result);
        } else {
            result = targetApply(...argumentList);
        }

        if (afterWrapperList?.length) {
            result = afterWrapperList.reduce((previousValue: any, currentValue: any) => {
                return currentValue(previousValue)
            }, result);
        }


        return result;
    }
}

/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 * If found in the path "AfterWrappers" it pushed to queue of "AfterWrappers" and the same of "BeforeWrappers"
 * Examples: Is.All.Not.Boolean([true, false, [0]])
 * Explain: AfterWrappers[BeforeWrappers[[true, false, [0]]]]
 *
 * If need check array of some class, just register the class in typeWrappers, examples:
 *
 * Example #1
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * Object.assign(typeWrappers, {Person});
 *
 * // Later
 * Is.Person.Array([new Person(), true, 0]) // Returns false
 * Is.Not.Person.Array([new Person(), true, 0]) // Returns true
 * Is.Person.Array([new Person(), new Person()]) // Returns true
 * Is.Person.Array([]) // Returns true
 *
 * Example #2
 *
 * @RegisterInIs({ className: 'PersonModel' }) // Or @RegisterInIs() and then call later, as shown in example #1 above
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * // Later
 * Is.PersonModel.Array([new Person(), true, 0]) // Returns false
 * Is.Not.PersonModel.Array([new Person(), true, 0]) // Returns true
 * Is.PersonModel.Array([new Person(), new Person()]) // Returns true
 * Is.PersonModel.Array([]) // Returns true
 * Is.PersonModel(new Address()) // Returns false
 * Is.PersonModel(new Person()) // Returns true
 *
 *
 * @param target must by an object
 * @param name must be a string
 * @param methodList must be array of methods
 * @param flags
 * @param beforeWrapperList must be array of before wrappers
 * @param typeWrapperList must be array of type wrappers
 * @param afterWrapperList must be array of after wrappers
 */
export function proxyRecursive(
    target: object,
    name: string,
    methodList: object,
    flags: FlagsToolInterface,
    beforeWrapperList: beforeWrapperType[],
    typeWrapperList: typeWrapperType[],
    afterWrapperList: afterWrapperType[],
): object {

    // TODO serve case of Is.PersonModel(new Address());

    let newTarget: object = methodList;

    flags.Method = methodList.hasOwnProperty(name);

    if (flags.Method) {
        newTarget = methodList[(name as keyof (typeof methodList))] ?? target;
    } else {
        initWrappers(name, flags, typeWrapperList, beforeWrapperList, afterWrapperList);
    }

    return new Proxy(newTarget, {
        get: proxyRecursiveGet(flags, typeWrapperList, beforeWrapperList, afterWrapperList),
        apply: proxyRecursiveApply(flags, typeWrapperList, beforeWrapperList, afterWrapperList),
    });
}

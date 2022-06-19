import {RegisterInIs} from '../../../lib/decorators';

@RegisterInIs()
// @ts-ignore
class Person {
    public testMethod(argument: unknown): boolean {
        return true;
    }
}

@RegisterInIs()
// @ts-ignore
class Address {
}

export const dataForGoodTesting: {value: any[]}[] = [
    {
        value: [new Person()]
    },
    {
        value: [new Person(), [new Person()]]
    },
];

export const dataForBadTesting: {value: any[]}[] = [
    {
        value: [new Address()]
    },
    {
        value: [true]
    },
    {
        value: [false]
    },
    {
        value: [true, false]
    },
    {
        value: [false, true]
    },
    {
        value: ['undefined']
    },
    {
        value: ['null']
    },
    {
        value: [Symbol()]
    },
    {
        value: [BigInt(1)]
    },
    {
        value: [""]
    },
    {
        value: ['']
    },
    {
        value: [``]
    },
    {
        value: [{}]
    },
    {
        value: [0]
    },
    {
        value: [null]
    },
    {
        value: [undefined]
    },
    {
        value: [Function]
    },
    {
        value: [() => {}]
    },
    {
        value: [BigInt]
    },
    {
        value: [Symbol]
    },
    {
        value: [NaN]
    },
];

export const advancedDataForBadTesting: {value: any[]}[] = dataForBadTesting.map((object: {value: any[]}) => {
    return {
        value: [
            ...(dataForGoodTesting[dataForGoodTesting.length - 1].value),
            ...object.value,
        ]
    };
});

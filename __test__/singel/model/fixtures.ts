import {RegisterInIs} from '../../../dist';

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

@RegisterInIs()
// @ts-ignore
export class Cart {
    public size: number = 0
}


export const dataForGoodTesting: {value: any}[] = [
    {
        value: new Person()
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: 'undefined'
    },
    {
        value: 'null'
    },
    {
        value: []
    },
    {
        value: Symbol()
    },
    {
        value: true
    },
    {
        value: false
    },
    {
        value: BigInt(1)
    },
    {
        value: ""
    },
    {
        value: ''
    },
    {
        value: ``
    },
    {
        value: {}
    },
    {
        value: 0
    },
    {
        value: null
    },
    {
        value: undefined
    },
    {
        value: Function
    },
    {
        value: () => {}
    },
    {
        value: BigInt
    },
    {
        value: Symbol
    },
    {
        value: NaN
    },
];

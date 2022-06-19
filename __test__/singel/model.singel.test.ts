import {RegisterInIs} from '../../lib/decorators';
import {Is} from '../../lib';

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


describe('Model singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new Person()
        },
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('Is.Person: Should true for $value', ({value}) => {
        expect(Is.Person(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Array: Should false for $value', ({value}) => {
        expect(Is.Person(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Person: Should false for $value', ({value}) => {
        expect(Is.Not.Person(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Person: Should true for $value', ({value}) => {
        expect(Is.Not.Person(value)).toBe(true);
    });

});

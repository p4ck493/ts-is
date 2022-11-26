import {RegisterInIs} from '../../../lib/decorators';
import {is} from '../../../lib';

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


describe('Model singel: apply', () => {

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

    it.each(dataForGoodTesting)('is.Person: Should true for $value', ({value}) => {
        expect(is.Person.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Person: Should false for $value', ({value}) => {
        expect(is.Person.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Person: Should false for $value', ({value}) => {
        expect(is.not.Person.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Person: Should true for $value', ({value}) => {
        expect(is.not.Person.apply({}, [value])).toBe(true);
    });

});

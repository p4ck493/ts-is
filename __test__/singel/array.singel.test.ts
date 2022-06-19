import {Is} from '../../lib';
import {RegisterInIs} from '../../lib/decorators';

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


describe('Array singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: []
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

    it.each(dataForGoodTesting)('Is.Array: Should true for $value', ({value}) => {
        expect(Is.Array(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Array: Should false for $value', ({value}) => {
        expect(Is.Array(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Array: Should false for $value', ({value}) => {
        expect(Is.Not.Array(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Array: Should true for $value', ({value}) => {
        expect(Is.Not.Array(value)).toBe(true);
    });

    it('Is.Person.Array: Should true for [new TestArray()]', () => {
        expect(Is.Person.Array([new Person()])).toBe(true);
    });

    it('Is.Person.Array: Should false for [1,2,3]', () => {
        expect(Is.Not.Person.Array([1,2,3])).toBe(true);
    });

    it('Is.Not.Person.Array: Should true for number[]', () => {
        const arr: number[] = [];
        expect(Is.Not.Person.Array(arr)).toBe(true);
    });

    it('Is.Person.Array: Should false for number[]', () => {
        const arr: number[] = [];
        expect(Is.Person.Array(arr)).toBe(false);
    });

    it('Is.Not.Person.Array: Should false for Person[]', () => {
        const arr: Person[] = [];
        expect(Is.Not.Person.Array(arr)).toBe(true);
    });

    it('Is.Person.Array: Should false for Person[]', () => {
        const arr: Person[] = [];
        expect(Is.Person.Array(arr)).toBe(false);
    });

    // it('Is.Person.Array: Should false for Person[]', () => {
    //     const person = new Address();
    //     expect((Is.Person as any)(person)).toBe(true);
    // });

});

import {Is} from '../../lib';
import {UseForIs} from '../../lib/decorators';

@UseForIs
// @ts-ignore
class Person {
    public testMethod(argument: unknown): boolean {
        return true;
    }
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

    it('Is.TestArray.Array: Should true for [new TestArray()]', () => {
        expect(Is.Person.Array([new Person()])).toBe(true);
    });

    it('Is.TestArray.Array: Should false for [1,2,3]', () => {
        expect(Is.Not.Person.Array([1,2,3])).toBe(true);
    });

});

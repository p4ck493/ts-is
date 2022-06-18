import {Is} from '../../lib';

class TestArray {
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

    // it('Is.Array<number>: Should true for [1,2,3]', () => {
    //     expect(Is.Array<number>([1,2,3])).toBe(true);
    // });
    //
    // it('Is.Array<string>: Should false for [1,2,3]', () => {
    //     expect(Is.Array<string>([1,2,3])).toBe(false);
    // });

});

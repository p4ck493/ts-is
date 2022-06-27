import {Is} from '../../lib';


describe('Empty Array singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: []
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: {}
        },
        {
            value: {
                property: 1
            }
        },
        {
            value: null
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
            value: Symbol()
        },
        {
            value: NaN
        },
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
        {
            value: true
        },
        {
            value: BigInt(1)
        },
        {
            value: false
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
    ];

    it.each(dataForGoodTesting)('Is.EmptyArray: Should true for $value', ({value}) => {
        expect(Is.EmptyArray(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.EmptyArray: Should false for $value', ({value}) => {
        expect(Is.EmptyArray(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.EmptyArray: Should false for $value', ({value}) => {
        expect(Is.Not.EmptyArray(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.EmptyArray: Should true for $value', ({value}) => {
        expect(Is.Not.EmptyArray(value)).toBe(true);
    });

});

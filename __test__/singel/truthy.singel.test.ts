import {Is} from '../../lib';

describe('Truthy singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: []
        },
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
            value: BigInt(1)
        },
        {
            value: {}
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

    const dataForBadTesting: {value: any}[] = [
        {
            value: false
        },
        {
            value: null
        },
        {
            value: undefined
        },
        {
            value: 0
        },
        {
            value: -0
        },
        {
            value: NaN
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
    ];

    it.each(dataForGoodTesting)('Is.Truthy: Should true for $value', ({value}) => {
        expect(Is.Truthy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Truthy: Should false for $value', ({value}) => {
        expect(Is.Truthy(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Truthy: Should false for $value', ({value}) => {
        expect(Is.Not.Truthy(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Truthy: Should true for $value', ({value}) => {
        expect(Is.Not.Truthy(value)).toBe(true);
    });

});

import {is} from '../../lib';

describe('truthy singel', () => {

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

    it.each(dataForGoodTesting)('is.truthy: Should true for $value', ({value}) => {
        expect(is.truthy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.truthy: Should false for $value', ({value}) => {
        expect(is.truthy(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.truthy: Should false for $value', ({value}) => {
        expect(is.not.truthy(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.truthy: Should true for $value', ({value}) => {
        expect(is.not.truthy(value)).toBe(true);
    });

});

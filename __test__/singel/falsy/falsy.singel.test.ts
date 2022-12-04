import {is} from '../../../dist';

describe('falsy singel', () => {

    const dataForGoodTesting: {value: any}[] = [
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

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.falsy: Should true for $value', ({value}) => {
        expect(is.falsy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.falsy: Should false for $value', ({value}) => {
        expect(is.falsy(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.falsy: Should false for $value', ({value}) => {
        expect(is.not.falsy(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.falsy: Should true for $value', ({value}) => {
        expect(is.not.falsy(value)).toBe(true);
    });

});

import {is} from '../../../lib';

describe('Zero singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: NaN
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: 0,
        },
        {
            value: new WeakSet(),
        },
        {
            value: new Set(),
        },
        {
            value: [],
        },
        {
            value: [0,1,3],
        },
        {
            value: ['0','1','3'],
        },
        {
            value: [true, false],
        },
        {
            value: [NaN],
        },
        {
            value: [{}],
        },
        {
            value: [true, false, 0, 'string', {}, NaN],
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
    ];

    it.each(dataForGoodTesting)('is.NaN: Should true for $value', ({value}) => {
        expect(is.NaN(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.NaN: Should false for $value', ({value}) => {
        expect(is.NaN(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.NaN: Should false for $value', ({value}) => {
        expect(is.not.NaN(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.NaN: Should true for $value', ({value}) => {
        expect(is.not.NaN(value)).toBe(true);
    });

});

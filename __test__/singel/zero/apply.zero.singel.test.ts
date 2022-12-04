import {is} from '../../../src';

describe('Zero singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: 0,
        }
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.zero: Should true for $value', ({value}) => {
        expect(is.zero.apply([], [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.zero: Should false for $value', ({value}) => {
        expect(is.zero.apply([], [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.zero: Should false for $value', ({value}) => {
        expect(is.not.zero.apply([], [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.zero: Should true for $value', ({value}) => {
        expect(is.not.zero.apply([], [value])).toBe(true);
    });

});

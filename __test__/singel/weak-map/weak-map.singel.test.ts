import {is} from '../../../lib';

describe('WeakMap singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new WeakMap(),
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

    it.each(dataForGoodTesting)('is.weakMap: Should true for $value', ({value}) => {
        expect(is.weakMap(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.weakMap: Should false for $value', ({value}) => {
        expect(is.weakMap(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.weakMap: Should false for $value', ({value}) => {
        expect(is.not.weakMap(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.weakMap: Should true for $value', ({value}) => {
        expect(is.not.weakMap(value)).toBe(true);
    });

});

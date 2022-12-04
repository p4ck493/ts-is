import {is} from '../../../src';

describe('WeakSet singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new WeakSet(),
        }
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.WeakSet: Should true for $value', ({value}) => {
        expect(is.WeakSet.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.WeakSet: Should false for $value', ({value}) => {
        expect(is.WeakSet.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.WeakSet: Should false for $value', ({value}) => {
        expect(is.not.WeakSet.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.WeakSet: Should true for $value', ({value}) => {
        expect(is.not.WeakSet.apply({}, [value])).toBe(true);
    });

});

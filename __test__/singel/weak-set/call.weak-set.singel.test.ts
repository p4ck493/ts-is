import {is} from '../../../lib';

describe('WeakSet singel: call', () => {

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

    it.each(dataForGoodTesting)('is.weakSet: Should true for $value', ({value}) => {
        expect(is.weakSet.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.weakSet: Should false for $value', ({value}) => {
        expect(is.weakSet.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.weakSet: Should false for $value', ({value}) => {
        expect(is.not.weakSet.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.weakSet: Should true for $value', ({value}) => {
        expect(is.not.weakSet.call({}, value)).toBe(true);
    });

});

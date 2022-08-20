import {is} from '../../lib';


describe('empty singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: {}
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
            value: []
        },
        {
            value: new Map()
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: {
                property: 1
            }
        },
        {
            value: new Map([['a', 'b']])
        },
        {
            value: null
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

    it.each(dataForGoodTesting)('is.empty: Should true for $value', ({value}) => {
        expect(is.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.empty: Should false for $value', ({value}) => {
        expect(is.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.empty: Should false for $value', ({value}) => {
        expect(is.not.empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.empty: Should true for $value', ({value}) => {
        expect(is.not.empty(value)).toBe(true);
    });

});

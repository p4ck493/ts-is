import {is} from '../../lib';


describe('null.or.empty or', () => {

    const dataForGoodTesting: { value: any }[] = [
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
            value: {}
        },
        {
            value: []
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: Symbol()
        },
        {
            value: undefined
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
            value: Function
        },
        {
            value: () => {
            }
        },
        {
            value: BigInt
        },
        {
            value: Symbol
        },
    ];

    it.each(dataForGoodTesting)('is.null.or.empty: Should true for $value', ({value}) => {
        expect(is.null.or.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.null.or.empty: Should false for $value', ({value}) => {
        expect(is.null.or.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.null.or.empty: Should false for $value', ({value}) => {
        expect(is.not.null.or.empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.null.or.empty: Should true for $value', ({value}) => {
        expect(is.not.null.or.empty(value)).toBe(true);
    });

});

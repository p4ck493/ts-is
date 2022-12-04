import {is} from '../../src';


describe('undefined.or.null or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: null
        },
        {
            value: undefined
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: 'undefined'
        },
        {
            value: 'null'
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
            value: Symbol()
        },
        {
            value: {}
        },
        {
            value: true
        },
        {
            value: BigInt(1)
        },
        {
            value: []
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
        {
            value: NaN
        },
    ];

    it.each(dataForGoodTesting)('is.undefined.or.null: Should true for $value', ({value}) => {
        expect(is.undefined.or.null(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.undefined.or.null: Should false for $value', ({value}) => {
        expect(is.undefined.or.null(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.undefined.or.null: Should false for $value', ({value}) => {
        expect(is.not.undefined.or.null(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.undefined.or.null: Should true for $value', ({value}) => {
        expect(is.not.undefined.or.null(value)).toBe(true);
    });

});

import {is} from '../../src';


describe('string.or.number.or.true or', () => {

    const dataForGoodTesting: { value: any }[] = [
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
            value: true
        },
        {
            value: 0
        },
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: NaN
        },
        {
            value: undefined
        },
        {
            value: {}
        },
        {
            value: []
        },
        {
            value: null
        },
        {
            value: Symbol()
        },
        {
            value: BigInt(1)
        },
        {
            value: false
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

    it.each(dataForGoodTesting)('is.string.or.number.or.true: Should true for $value', ({value}) => {
        expect(is.string.or.number.or.true(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.string.or.number.or.true: Should false for $value', ({value}) => {
        expect(is.string.or.number.or.true(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.string.or.number.or.true: Should false for $value', ({value}) => {
        expect(is.not.string.or.number.or.true(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.string.or.number.or.true: Should true for $value', ({value}) => {
        expect(is.not.string.or.number.or.true(value)).toBe(true);
    });

});

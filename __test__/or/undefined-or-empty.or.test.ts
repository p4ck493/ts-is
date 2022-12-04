import {is} from '../../dist';


describe('undefined.or.empty or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: undefined
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

    it.each(dataForGoodTesting)('is.undefined.or.empty: Should true for $value', ({value}) => {
        expect(is.undefined.or.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.undefined.or.empty: Should false for $value', ({value}) => {
        expect(is.undefined.or.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.undefined.or.empty: Should false for $value', ({value}) => {
        expect(is.not.undefined.or.empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.undefined.or.empty: Should true for $value', ({value}) => {
        expect(is.not.undefined.or.empty(value)).toBe(true);
    });

});

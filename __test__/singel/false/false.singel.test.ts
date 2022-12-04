import {is} from '../../../dist';


describe('false singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: false
        },
    ];

    const dataForBadTesting: {value: any}[] = [
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
            value: BigInt(1)
        },
        {
            value: []
        },
        {
            value: true
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

    it.each(dataForGoodTesting)('is.false: Should true for $value', ({value}) => {
        expect(is.false(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.false: Should false for $value', ({value}) => {
        expect(is.false(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.false: Should false for $value', ({value}) => {
        expect(is.not.false(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.false: Should true for $value', ({value}) => {
        expect(is.not.false(value)).toBe(true);
    });

});

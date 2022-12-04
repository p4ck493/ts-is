import {is} from '../../../src';


describe('function singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: Object.keys
        },
        {
            value: Symbol
        },
        {
            value: BigInt
        },
        {
            value: Function
        },
        {
            value: () => {}
        }
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: 'null'
        },
        {
            value: 'undefined'
        },
        {
            value: Symbol()
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
            value: undefined
        },
        {
            value: null
        },
        {
            value: NaN
        },
    ];

    it.each(dataForGoodTesting)('is.function: Should true for $value', ({value}) => {
        expect(is.function.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.function: Should false for $value', ({value}) => {
        expect(is.function.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.function: Should false for $value', ({value}) => {
        expect(is.not.function.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.function: Should true for $value', ({value}) => {
        expect(is.not.function.apply({}, [value])).toBe(true);
    });

});

import {is} from '../../../lib';


describe('bigInt singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: BigInt(1)
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
            value: []
        },
        {
            value: true
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

    it.each(dataForGoodTesting)('is.bigInt: Should true for $value', ({value}) => {
        expect(is.bigInt.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.bigInt: Should false for $value', ({value}) => {
        expect(is.bigInt.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.bigInt: Should false for $value', ({value}) => {
        expect(is.not.bigInt.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.bigInt: Should true for $value', ({value}) => {
        expect(is.not.bigInt.apply({}, [value])).toBe(true);
    });

});

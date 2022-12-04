import {is} from '../../../dist';


describe('symbol singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: Symbol()
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: 'null'
        },
        {
            value: 'undefined'
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

    it.each(dataForGoodTesting)('is.symbol: Should true for $value', ({value}) => {
        expect(is.symbol.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.symbol: Should false for $value', ({value}) => {
        expect(is.symbol.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.symbol: Should false for $value', ({value}) => {
        expect(is.not.symbol.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.symbol: Should true for $value', ({value}) => {
        expect(is.not.symbol.call({}, value)).toBe(true);
    });

});

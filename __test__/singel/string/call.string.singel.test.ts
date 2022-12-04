import {is} from '../../../dist';


describe('string singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
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
            value: ``
        },
        {
            value: `3`
        },
        {
            value: `1`
        },
        {
            value: `2`
        },
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.string: Should true for $value', ({value}) => {
        expect(is.string.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.string: Should false for $value', ({value}) => {
        expect(is.string.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.string: Should false for $value', ({value}) => {
        expect(is.not.string.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.string: Should true for $value', ({value}) => {
        expect(is.not.string.call({}, value)).toBe(true);
    });

});

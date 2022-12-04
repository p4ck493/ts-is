import {is} from '../../../src';


describe('number singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: 0
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
            value: null
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

    it.each(dataForGoodTesting)('is.number: Should true for $value', ({value}) => {
        expect(is.number.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.number: Should false for $value', ({value}) => {
        expect(is.number.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.number: Should false for $value', ({value}) => {
        expect(is.not.number.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.number: Should true for $value', ({value}) => {
        expect(is.not.number.call({}, value)).toBe(true);
    });

});

import {is} from '../../../lib';


describe('undefined singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: undefined
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
            value: true
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
    ];

    it.each(dataForGoodTesting)('is.undefined: Should true for $value', ({value}) => {
        expect(is.undefined.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.undefined: Should false for $value', ({value}) => {
        expect(is.undefined.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.undefined: Should false for $value', ({value}) => {
        expect(is.not.undefined.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.undefined: Should true for $value', ({value}) => {
        expect(is.not.undefined.call({}, value)).toBe(true);
    });

});

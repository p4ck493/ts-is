import {is} from '../../../lib';


describe('Empty String singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: ""
        },
        {
            value: ''
        },
        {
            value: ``
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: {}
        },
        {
            value: []
        },
        {
            value: Symbol()
        },
        {
            value: NaN
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
    ];

    const dataForGoodCaseTesting: {value: any}[] = [
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
    ];

    it.each(dataForGoodTesting)('is.string.empty: Should true for $value', ({value}) => {
        expect(is.string.empty.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.string.empty: Should false for $value', ({value}) => {
        expect(is.string.empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.string.not.empty: Should false for $value', ({value}) => {
        expect(is.string.not.empty.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.string.not.empty: Should false for $value', ({value}) => {
        expect(is.string.not.empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.string.not.empty: Should true for $value', ({value}) => {
        expect(is.string.not.empty.call({}, value)).toBe(true);
    });

});

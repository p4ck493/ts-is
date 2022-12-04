import {is} from '../../../src';


describe('Empty Object singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: {}
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: null
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
            value: Symbol()
        },
        {
            value: NaN
        },
        {
            value: []
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
            value: {
                property: 1
            }
        },
    ];

    it.each(dataForGoodTesting)('is.object.empty: Should true for $value', ({value}) => {
        expect(is.object.empty.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.object.empty: Should false for $value', ({value}) => {
        expect(is.object.empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.object.not.empty: Should false for $value', ({value}) => {
        expect(is.object.not.empty.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.object.not.empty: Should false for $value', ({value}) => {
        expect(is.object.not.empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.object.not.empty: Should true for $value', ({value}) => {
        expect(is.object.not.empty.call({}, value)).toBe(true);
    });

});

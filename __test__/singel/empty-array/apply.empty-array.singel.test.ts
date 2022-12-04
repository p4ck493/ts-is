import {is} from '../../../src';


describe('Empty Array singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: []
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: {}
        },
        {
            value: {
                property: 1
            }
        },
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
            value: ['test']
        },
        {
            value: [1]
        },
        {
            value: [[]]
        },
        {
            value: [{}]
        },
    ];

    it.each(dataForGoodTesting)('is.array.empty: Should true for $value', ({value}) => {
        expect(is.array.empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.array.empty: Should false for $value', ({value}) => {
        expect(is.array.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.array.not.empty: Should false for $value', ({value}) => {
        expect(is.array.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.array.not.empty: Should false for $value', ({value}) => {
        expect(is.array.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.array.not.empty: Should true for $value', ({value}) => {
        expect(is.array.not.empty.apply({}, [value])).toBe(true);
    });

});

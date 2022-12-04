import {is} from '../../../src';

describe('Primitive singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: 0,
        },
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
            value: NaN
        },
        {
            value: undefined
        },
        {
            value: null
        },
        {
            value: true
        },
        {
            value: false
        },
        {
            value: Symbol()
        },
        {
            value: BigInt(1)
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: new WeakSet(),
        },
        {
            value: new Set(),
        },
        {
            value: [],
        },
        {
            value: [0,1,3],
        },
        {
            value: ['0','1','3'],
        },
        {
            value: [true, false],
        },
        {
            value: [NaN],
        },
        {
            value: [{}],
        },
        {
            value: [true, false, 0, 'string', {}, NaN],
        },
        {
            value: {}
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

    it.each(dataForGoodTesting)('is.primitive: Should true for $value', ({value}) => {
        expect(is.primitive(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.primitive: Should false for $value', ({value}) => {
        expect(is.primitive(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.primitive: Should false for $value', ({value}) => {
        expect(is.not.primitive(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.primitive: Should true for $value', ({value}) => {
        expect(is.not.primitive(value)).toBe(true);
    });

});

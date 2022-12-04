import {is} from '../../../src';

describe('Map singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new Map(),
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: new URIError(),
        },
        {
            value: new TypeError(),
        },
        {
            value: new SyntaxError(),
        },
        {
            value: new ReferenceError(),
        },
        {
            value: new Error(),
        },
        {
            value: new EvalError(),
        },
        {
            value: new Date(),
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
            value: 'undefined'
        },
        {
            value: 'null'
        },
        {
            value: Symbol()
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

    it.each(dataForGoodTesting)('is.Map: Should true for $value', ({value}) => {
        expect(is.Map(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Map: Should false for $value', ({value}) => {
        expect(is.Map(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Map: Should false for $value', ({value}) => {
        expect(is.not.Map(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Map: Should true for $value', ({value}) => {
        expect(is.not.Map(value)).toBe(true);
    });

});

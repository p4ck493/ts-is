import {is} from '../../../lib';

describe('URIError singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new URIError(),
        },
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.URIError: Should true for $value', ({value}) => {
        expect(is.URIError(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.URIError: Should false for $value', ({value}) => {
        expect(is.URIError(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.URIError: Should false for $value', ({value}) => {
        expect(is.not.URIError(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.URIError: Should true for $value', ({value}) => {
        expect(is.not.URIError(value)).toBe(true);
    });

});

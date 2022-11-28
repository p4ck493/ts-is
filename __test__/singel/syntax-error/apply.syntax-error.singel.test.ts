import {is} from '../../../lib';

describe('syntaxError singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new SyntaxError(),
        },
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.syntaxError: Should true for $value', ({value}) => {
        expect(is.syntaxError.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.syntaxError: Should false for $value', ({value}) => {
        expect(is.syntaxError.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.syntaxError: Should false for $value', ({value}) => {
        expect(is.not.syntaxError.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.syntaxError: Should true for $value', ({value}) => {
        expect(is.not.syntaxError.apply({}, [value])).toBe(true);
    });

});

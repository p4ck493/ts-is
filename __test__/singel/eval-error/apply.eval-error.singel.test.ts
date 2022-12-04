import {is} from '../../../dist';

describe('EvalError singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new EvalError(),
        }
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: new Error(),
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

    it.each(dataForGoodTesting)('is.EvalError: Should true for $value', ({value}) => {
        expect(is.EvalError.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.EvalError: Should false for $value', ({value}) => {
        expect(is.EvalError.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.EvalError: Should false for $value', ({value}) => {
        expect(is.not.EvalError.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.EvalError: Should true for $value', ({value}) => {
        expect(is.not.EvalError.apply({}, [value])).toBe(true);
    });

});

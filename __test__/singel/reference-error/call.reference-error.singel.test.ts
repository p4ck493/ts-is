import {is} from '../../../lib';

describe('referenceError singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new ReferenceError(),
        },
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.referenceError: Should true for $value', ({value}) => {
        expect(is.referenceError.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.referenceError: Should false for $value', ({value}) => {
        expect(is.referenceError.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.referenceError: Should false for $value', ({value}) => {
        expect(is.not.referenceError.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.referenceError: Should true for $value', ({value}) => {
        expect(is.not.referenceError.call({}, value)).toBe(true);
    });

});

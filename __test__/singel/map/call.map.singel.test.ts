import {is} from '../../../lib';

describe('map singel: call', () => {

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

    it.each(dataForGoodTesting)('is.map: Should true for $value', ({value}) => {
        expect(is.map.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.map: Should false for $value', ({value}) => {
        expect(is.map.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.map: Should false for $value', ({value}) => {
        expect(is.not.map.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.map: Should true for $value', ({value}) => {
        expect(is.not.map.call({}, value)).toBe(true);
    });

});

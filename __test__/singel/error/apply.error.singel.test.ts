import {is} from '../../../lib';

describe('error singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new Error(),
        }
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.error: Should true for $value', ({value}) => {
        expect(is.error.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.error: Should false for $value', ({value}) => {
        expect(is.error.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.error: Should false for $value', ({value}) => {
        expect(is.not.error.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.error: Should true for $value', ({value}) => {
        expect(is.not.error.apply({}, [value])).toBe(true);
    });

});

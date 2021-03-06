import {is} from '../../lib';


describe('boolean singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: true
        },
        {
            value: false
        }
    ];

    const dataForBadTesting: {value: any}[] = [
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
            value: []
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

    it.each(dataForGoodTesting)('is.boolean: Should true for $value', ({value}) => {
        expect(is.boolean(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.boolean: Should false for $value', ({value}) => {
        expect(is.boolean(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.boolean: Should false for $value', ({value}) => {
        expect(is.not.boolean(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.boolean: Should true for $value', ({value}) => {
        expect(is.not.boolean(value)).toBe(true);
    });

});

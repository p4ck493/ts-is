import {is} from '../../../dist';


describe('object singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: {}
        },
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
            value: true
        },
        {
            value: BigInt(1)
        },
        {
            value: []
        },
        {
            value: false
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

    it.each(dataForGoodTesting)('is.object: Should true for $value', ({value}) => {
        expect(is.object(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.object: Should false for $value', ({value}) => {
        expect(is.object(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.object: Should false for $value', ({value}) => {
        expect(is.not.object(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.object: Should true for $value', ({value}) => {
        expect(is.not.object(value)).toBe(true);
    });

});

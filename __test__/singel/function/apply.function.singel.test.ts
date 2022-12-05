import {is} from '../../../dist';


describe('Function singel: apply', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: Object.keys
        },
        {
            value: Symbol
        },
        {
            value: BigInt
        },
        {
            value: Function
        },
        {
            value: () => {}
        }
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: 'null'
        },
        {
            value: 'undefined'
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
            value: {}
        },
        {
            value: 0
        },
        {
            value: undefined
        },
        {
            value: null
        },
        {
            value: NaN
        },
    ];

    it.each(dataForGoodTesting)('is.Function: Should true for $value', ({value}) => {
        expect(is.Function.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Function: Should false for $value', ({value}) => {
        expect(is.Function.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Function: Should false for $value', ({value}) => {
        expect(is.not.Function.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Function: Should true for $value', ({value}) => {
        expect(is.not.Function.apply({}, [value])).toBe(true);
    });

});

import {is} from '../../../dist';


describe('null singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: null
        },
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

    it.each(dataForGoodTesting)('is.null: Should true for $value', ({value}) => {
        expect(is.null.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.null: Should false for $value', ({value}) => {
        expect(is.null.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.null: Should false for $value', ({value}) => {
        expect(is.not.null.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.null: Should true for $value', ({value}) => {
        expect(is.not.null.call({}, value)).toBe(true);
    });

});

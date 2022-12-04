import {is} from '../../../dist';


describe('true singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: true
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

    it.each(dataForGoodTesting)('is.true: Should true for $value', ({value}) => {
        expect(is.true.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.true: Should false for $value', ({value}) => {
        expect(is.true.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.true: Should false for $value', ({value}) => {
        expect(is.not.true.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.true: Should true for $value', ({value}) => {
        expect(is.not.true.call({}, value)).toBe(true);
    });

});

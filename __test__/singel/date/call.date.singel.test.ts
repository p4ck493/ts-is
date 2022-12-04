import {is} from '../../../dist';

describe('Date singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new Date(),
        }
    ];

    const dataForBadTesting: {value: any}[] = [
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

    it.each(dataForGoodTesting)('is.Date: Should true for $value', ({value}) => {
        expect(is.Date.call({} ,value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Date: Should false for $value', ({value}) => {
        expect(is.Date.call({} ,value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Date: Should false for $value', ({value}) => {
        expect(is.not.Date.call({} ,value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Date: Should true for $value', ({value}) => {
        expect(is.not.Date.call({} ,value)).toBe(true);
    });

});

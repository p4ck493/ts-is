import {is} from '../../../lib';

describe('date singel: call', () => {

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

    it.each(dataForGoodTesting)('is.date: Should true for $value', ({value}) => {
        expect(is.date.call({} ,value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.date: Should false for $value', ({value}) => {
        expect(is.date.call({} ,value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.date: Should false for $value', ({value}) => {
        expect(is.not.date.call({} ,value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.date: Should true for $value', ({value}) => {
        expect(is.not.date.call({} ,value)).toBe(true);
    });

});

import {is} from '../../../dist';

describe('DataView singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new DataView(new ArrayBuffer(16), 0),
        }
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: new WeakSet(),
        },
        {
            value: new Set(),
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

    it.each(dataForGoodTesting)('is.DataView: Should true for $value', ({value}) => {
        expect(is.DataView(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.DataView: Should false for $value', ({value}) => {
        expect(is.DataView(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.DataView: Should false for $value', ({value}) => {
        expect(is.not.DataView(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.DataView: Should true for $value', ({value}) => {
        expect(is.not.DataView(value)).toBe(true);
    });

});

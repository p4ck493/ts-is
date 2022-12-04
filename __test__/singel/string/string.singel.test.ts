import {is} from '../../../dist';


describe('string singel', () => {

    // it('is.string: Should true for $value', () => {
    //     // expect(is.string.not.null.or.undefined('is.string: Should true for $value')).toBe(true);
    //     // expect(is.string.null.or.undefined('is.string: Should true for $value')).toBe(true);
    //     expect(is.string.not.null.or.undefined('is.string: Should true for $value')).toBe(true);
    //     // expect(is.array.not.empty.or.null.call({}, 'is.string: Should true for $value')).toBe(true);
    // });

    const dataForGoodTesting: {value: any}[] = [
        {
            value: 'undefined'
        },
        {
            value: 'null'
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
            value: ``
        },
        {
            value: `3`
        },
        {
            value: `1`
        },
        {
            value: `2`
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: Symbol()
        },
        {
            value: {}
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

    it.each(dataForGoodTesting)('is.string: Should true for $value', ({value}) => {
        expect(is.string('value')).toBe(true);
    });

    it.each(dataForBadTesting)('is.string: Should false for $value', ({value}) => {
        expect(is.string(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.string: Should false for $value', ({value}) => {
        expect(is.not.string(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.string: Should true for $value', ({value}) => {
        expect(is.not.string(value)).toBe(true);
    });

    it('is.Map(new Map()) should true', () => {
        expect(is.Map(new Map())).toBe(true);
    });

    it('is.not.Map(new Map()) should false', () => {
        expect(is.not.Map(new Map())).toBe(false);
    });

    it('is.Map.apply({}, [new Map()]) should true', () => {
        expect(is.Map.apply({}, [new Map()])).toBe(true);
    });

    it('is.Map.call({}, new Map()) should true', () => {
        expect(is.Map.call({}, new Map())).toBe(true);
    });

    it('is.not.Map.apply({}, [new Map()]) should true', () => {
        expect(is.not.Map.apply({}, [new Map()])).toBe(false);
    });

    it('is.not.Map.call({}, new Map()) should true', () => {
        expect(is.not.Map.call({}, new Map())).toBe(false);
    });

});

import {Is} from '../../lib';


describe('Null or Undefined singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: undefined
        },
        {
            value: null
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
            value: true
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

    it.each(dataForGoodTesting)('Is.NullOrUndefined: Should true for $value', ({value}) => {
        expect(Is.NullOrUndefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.NullOrUndefined: Should false for $value', ({value}) => {
        expect(Is.NullOrUndefined(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.NullOrUndefined: Should false for $value', ({value}) => {
        expect(Is.Not.NullOrUndefined(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.NullOrUndefined: Should true for $value', ({value}) => {
        expect(Is.Not.NullOrUndefined(value)).toBe(true);
    });

});

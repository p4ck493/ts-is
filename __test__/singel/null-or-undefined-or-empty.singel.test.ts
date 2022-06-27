import {Is} from '../../lib';


describe('Null or Undefined Or Empty singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: {}
        },
        {
            value: []
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
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: NaN
        },
        {
            value: undefined
        },
        {
            value: null
        },
        {
            value: Symbol()
        },
        {
            value: {
                property: 'value of property'
            }
        },
        {
            value: ['item']
        },
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
            value: BigInt(1)
        },
        {
            value: false
        },
        {
            value: 0
        },
        {
            value: BigInt
        },
        {
            value: Symbol
        },
        {
            value: Function
        },
        {
            value: () => {}
        }
    ];

    it.each(dataForGoodTesting)('Is.NullOrUndefinedOrEmpty: Should true for $value', ({value}) => {
        expect(Is.NullOrUndefinedOrEmpty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.NullOrUndefinedOrEmpty: Should false for $value', ({value}) => {
        expect(Is.NullOrUndefinedOrEmpty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.NullOrUndefinedOrEmpty: Should false for $value', ({value}) => {
        expect(Is.Not.NullOrUndefinedOrEmpty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.NullOrUndefinedOrEmpty: Should true for $value', ({value}) => {
        expect(Is.Not.NullOrUndefinedOrEmpty(value)).toBe(true);
    });

});

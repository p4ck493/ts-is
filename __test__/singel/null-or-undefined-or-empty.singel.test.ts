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
        {
            value: undefined
        },
        {
            value: null
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: NaN
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

    it.each(dataForGoodTesting)('Is.Null.Or.Undefined.Or.Empty: Should true for $value', ({value}) => {
        expect(Is.Null.Or.Undefined.Or.Empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Null.Or.Undefined.Or.Empty: Should false for $value', ({value}) => {
        expect(Is.Null.Or.Undefined.Or.Empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Null.Or.Undefined.Or.Empty: Should false for $value', ({value}) => {
        expect(Is.Not.Null.Or.Undefined.Or.Empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Null.Or.Undefined.Or.Empty: Should true for $value', ({value}) => {
        expect(Is.Not.Null.Or.Undefined.Or.Empty(value)).toBe(true);
    });

});

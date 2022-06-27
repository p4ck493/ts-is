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

    it.each(dataForGoodTesting)('Is.Null.Or.Undefined: Should true for $value', ({value}) => {
        expect(Is.Null.Or.Undefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Null.Or.Undefined: Should false for $value', ({value}) => {
        expect(Is.Null.Or.Undefined(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Null.Or.Undefined: Should false for $value', ({value}) => {
        expect(Is.Not.Null.Or.Undefined(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Null.Or.Undefined: Should true for $value', ({value}) => {
        expect(Is.Not.Null.Or.Undefined(value)).toBe(true);
    });

});

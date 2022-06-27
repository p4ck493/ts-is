import {Is} from '../../lib';


describe('Undefined.Or.Empty or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: undefined
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
            value: []
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: null
        },
        {
            value: Symbol()
        },
        {
            value: NaN
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
            value: Function
        },
        {
            value: () => {
            }
        },
        {
            value: BigInt
        },
        {
            value: Symbol
        },
    ];

    it.each(dataForGoodTesting)('Is.Undefined.Or.Empty: Should true for $value', ({value}) => {
        expect(Is.Undefined.Or.Empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Undefined.Or.Empty: Should false for $value', ({value}) => {
        expect(Is.Undefined.Or.Empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Undefined.Or.Empty: Should false for $value', ({value}) => {
        expect(Is.Not.Undefined.Or.Empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Undefined.Or.Empty: Should true for $value', ({value}) => {
        expect(Is.Not.Undefined.Or.Empty(value)).toBe(true);
    });

});

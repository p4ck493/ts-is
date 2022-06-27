import {Is} from '../../lib';


describe('Null.Or.Empty or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: null
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
            value: Symbol()
        },
        {
            value: undefined
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

    it.each(dataForGoodTesting)('Is.Null.Or.Empty: Should true for $value', ({value}) => {
        expect(Is.Null.Or.Empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Null.Or.Empty: Should false for $value', ({value}) => {
        expect(Is.Null.Or.Empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Null.Or.Empty: Should false for $value', ({value}) => {
        expect(Is.Not.Null.Or.Empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Null.Or.Empty: Should true for $value', ({value}) => {
        expect(Is.Not.Null.Or.Empty(value)).toBe(true);
    });

});

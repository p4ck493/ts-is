import {Is} from '../../lib';


describe('String.Or.Number.Or.True or', () => {

    const dataForGoodTesting: { value: any }[] = [
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
            value: true
        },
        {
            value: 0
        },
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: NaN
        },
        {
            value: undefined
        },
        {
            value: {}
        },
        {
            value: []
        },
        {
            value: null
        },
        {
            value: Symbol()
        },
        {
            value: BigInt(1)
        },
        {
            value: false
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

    it.each(dataForGoodTesting)('Is.String.Or.Number.Or.True: Should true for $value', ({value}) => {
        expect(Is.String.Or.Number.Or.True(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.String.Or.Number.Or.True: Should false for $value', ({value}) => {
        expect(Is.String.Or.Number.Or.True(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.String.Or.Number.Or.True: Should false for $value', ({value}) => {
        expect(Is.Not.String.Or.Number.Or.True(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.String.Or.Number.Or.True: Should true for $value', ({value}) => {
        expect(Is.Not.String.Or.Number.Or.True(value)).toBe(true);
    });

});

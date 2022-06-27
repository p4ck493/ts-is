import {Is} from '../../lib';


describe('Undefined.Or.Null or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: null
        },
        {
            value: undefined
        },
    ];

    const dataForBadTesting: { value: any }[] = [
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
        {
            value: NaN
        },
    ];

    it.each(dataForGoodTesting)('Is.Undefined.Or.Null: Should true for $value', ({value}) => {
        expect(Is.Undefined.Or.Null(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Undefined.Or.Null: Should false for $value', ({value}) => {
        expect(Is.Undefined.Or.Null(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Undefined.Or.Null: Should false for $value', ({value}) => {
        expect(Is.Not.Undefined.Or.Null(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Undefined.Or.Null: Should true for $value', ({value}) => {
        expect(Is.Not.Undefined.Or.Null(value)).toBe(true);
    });

});

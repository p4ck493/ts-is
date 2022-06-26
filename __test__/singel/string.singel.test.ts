import {Is} from '../../lib';


describe('String singel', () => {

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

    it.each(dataForGoodTesting)('Is.String: Should true for $value', ({value}) => {
        expect(Is.String(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.String: Should false for $value', ({value}) => {
        expect(Is.String(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.String: Should false for $value', ({value}) => {
        expect(Is.Not.String(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.String: Should true for $value', ({value}) => {
        expect(Is.Not.String(value)).toBe(true);
    });

    // TODO it isnt work :(
    it.each([{value: ''}])('Is.String.Or.Number: Should true for $value', ({value}) => {
        expect(Is.All.Not.Null.Or.Undefined.Or.String.Or.String(value)).toBe(true);
    });

});

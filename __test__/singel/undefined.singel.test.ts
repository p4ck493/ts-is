import {Is} from '../../lib';


describe('Undefined singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: undefined
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
            value: null
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
    ];

    it.each(dataForGoodTesting)('Is.Undefined: Should true for $value', ({value}) => {
        expect(Is.Undefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Undefined: Should false for $value', ({value}) => {
        expect(Is.Undefined(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Undefined: Should false for $value', ({value}) => {
        expect(Is.Not.Undefined(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Undefined: Should true for $value', ({value}) => {
        expect(Is.Not.Undefined(value)).toBe(true);
    });

});

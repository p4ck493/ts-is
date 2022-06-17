import {Is} from '../../lib';


describe('BigInt singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: BigInt(1)
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
            value: Symbol()
        },
        {
            value: []
        },
        {
            value: true
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

    it.each(dataForGoodTesting)('Is.BigInt: Should true for $value', ({value}) => {
        expect(Is.BigInt(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.BigInt: Should false for $value', ({value}) => {
        expect(Is.BigInt(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.BigInt: Should false for $value', ({value}) => {
        expect(Is.Not.BigInt(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.BigInt: Should true for $value', ({value}) => {
        expect(Is.Not.BigInt(value)).toBe(true);
    });

});

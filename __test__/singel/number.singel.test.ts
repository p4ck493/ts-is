import {Is} from '../../lib';


describe('Number singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: 0
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
            value: null
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

    it.each(dataForGoodTesting)('Is.Number: Should true for $value', ({value}) => {
        expect(Is.Number(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Number: Should false for $value', ({value}) => {
        expect(Is.Number(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Number: Should false for $value', ({value}) => {
        expect(Is.Not.Number(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Number: Should true for $value', ({value}) => {
        expect(Is.Not.Number(value)).toBe(true);
    });

});

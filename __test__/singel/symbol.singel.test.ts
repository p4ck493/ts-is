import {Is} from '../../lib';


describe('Symbol singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: Symbol()
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: 'null'
        },
        {
            value: 'undefined'
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
            value: BigInt(1)
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

    it.each(dataForGoodTesting)('Is.Symbol: Should true for $value', ({value}) => {
        expect(Is.Symbol(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Symbol: Should false for $value', ({value}) => {
        expect(Is.Symbol(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Symbol: Should false for $value', ({value}) => {
        expect(Is.Not.Symbol(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Symbol: Should true for $value', ({value}) => {
        expect(Is.Not.Symbol(value)).toBe(true);
    });

});

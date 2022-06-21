import {Is} from '../../lib';

describe('Falsy singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: false
        },
        {
            value: null
        },
        {
            value: undefined
        },
        {
            value: 0
        },
        {
            value: -0
        },
        {
            value: NaN
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
            value: []
        },
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
            value: true
        },
        {
            value: BigInt(1)
        },
        {
            value: {}
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

    it.each(dataForGoodTesting)('Is.Falsy: Should true for $value', ({value}) => {
        expect(Is.Falsy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Falsy: Should false for $value', ({value}) => {
        expect(Is.Falsy(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Falsy: Should false for $value', ({value}) => {
        expect(Is.Not.Falsy(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Falsy: Should true for $value', ({value}) => {
        expect(Is.Not.Falsy(value)).toBe(true);
    });

});

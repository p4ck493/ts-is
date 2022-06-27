import {Is} from '../../lib';


describe('Empty singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: {}
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
            value: []
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: {
                property: 1
            }
        },
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
    ];

    it.each(dataForGoodTesting)('Is.Empty: Should true for $value', ({value}) => {
        expect(Is.Empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Empty: Should false for $value', ({value}) => {
        expect(Is.Empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Empty: Should false for $value', ({value}) => {
        expect(Is.Not.Empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Empty: Should true for $value', ({value}) => {
        expect(Is.Not.Empty(value)).toBe(true);
    });

});

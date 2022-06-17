import {Is} from '../../lib';


describe('Null singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: null
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
            value: Symbol()
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
            value: 0
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

    it.each(dataForGoodTesting)('Is.Null: Should true for $value', ({value}) => {
        expect(Is.Null(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Null: Should false for $value', ({value}) => {
        expect(Is.Null(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Null: Should false for $value', ({value}) => {
        expect(Is.Not.Null(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Null: Should true for $value', ({value}) => {
        expect(Is.Not.Null(value)).toBe(true);
    });

});

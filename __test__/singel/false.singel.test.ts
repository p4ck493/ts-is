import {Is} from '../../lib';


describe('False singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: false
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
            value: BigInt(1)
        },
        {
            value: []
        },
        {
            value: true
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

    it.each(dataForGoodTesting)('Is.False: Should true for $value', ({value}) => {
        expect(Is.False(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.False: Should false for $value', ({value}) => {
        expect(Is.False(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.False: Should false for $value', ({value}) => {
        expect(Is.Not.False(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.False: Should true for $value', ({value}) => {
        expect(Is.Not.False(value)).toBe(true);
    });

});

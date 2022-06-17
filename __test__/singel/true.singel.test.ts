import {Is} from '../../lib';


describe('True singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: true
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

    it.each(dataForGoodTesting)('Is.True: Should true for $value', ({value}) => {
        expect(Is.True(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.True: Should false for $value', ({value}) => {
        expect(Is.True(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.True: Should false for $value', ({value}) => {
        expect(Is.Not.True(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.True: Should true for $value', ({value}) => {
        expect(Is.Not.True(value)).toBe(true);
    });

});

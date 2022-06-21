import {Is} from '../../lib';


describe('Empty String singel', () => {

    const dataForGoodTesting: {value: any}[] = [
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
            value: {}
        },
        {
            value: []
        },
        {
            value: Symbol()
        },
        {
            value: NaN
        },
        {
            value: null
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

    it.each(dataForGoodTesting)('Is.EmptyString: Should true for $value', ({value}) => {
        expect(Is.EmptyString(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.EmptyString: Should false for $value', ({value}) => {
        expect(Is.EmptyString(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.EmptyString: Should false for $value', ({value}) => {
        expect(Is.Not.EmptyString(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.EmptyString: Should true for $value', ({value}) => {
        expect(Is.Not.EmptyString(value)).toBe(true);
    });

});

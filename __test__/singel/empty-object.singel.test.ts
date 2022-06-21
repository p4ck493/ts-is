import {Is} from '../../lib';


describe('Empty Object singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: {}
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
            value: ""
        },
        {
            value: ''
        },
        {
            value: ``
        },
        {
            value: Symbol()
        },
        {
            value: NaN
        },
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

    it.each(dataForGoodTesting)('Is.EmptyObject: Should true for $value', ({value}) => {
        expect(Is.EmptyObject(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.EmptyObject: Should false for $value', ({value}) => {
        expect(Is.EmptyObject(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.EmptyObject: Should false for $value', ({value}) => {
        expect(Is.Not.EmptyObject(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.EmptyObject: Should true for $value', ({value}) => {
        expect(Is.Not.EmptyObject(value)).toBe(true);
    });

});

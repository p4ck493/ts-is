import {Is} from '../../lib';


describe('Object singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: {}
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

    it.each(dataForGoodTesting)('Is.Object: Should true for $value', ({value}) => {
        expect(Is.Object(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Object: Should false for $value', ({value}) => {
        expect(Is.Object(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Object: Should false for $value', ({value}) => {
        expect(Is.Not.Object(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Object: Should true for $value', ({value}) => {
        expect(Is.Not.Object(value)).toBe(true);
    });

});

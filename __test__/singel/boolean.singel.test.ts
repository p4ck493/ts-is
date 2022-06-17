import {Is} from '../../lib';


describe('Boolean singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: true
        },
        {
            value: false
        }
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
            value: []
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

    it.each(dataForGoodTesting)('Is.Boolean: Should true for $value', ({value}) => {
        expect(Is.Boolean(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Boolean: Should false for $value', ({value}) => {
        expect(Is.Boolean(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Boolean: Should false for $value', ({value}) => {
        expect(Is.Not.Boolean(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Boolean: Should true for $value', ({value}) => {
        expect(Is.Not.Boolean(value)).toBe(true);
    });

});

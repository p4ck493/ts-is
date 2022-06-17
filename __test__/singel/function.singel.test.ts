import {Is} from '../../lib';


describe('Null singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: Object.keys
        },
        {
            value: Symbol
        },
        {
            value: BigInt
        },
        {
            value: Function
        },
        {
            value: () => {}
        }
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
            value: null
        },
        {
            value: NaN
        },
    ];

    it.each(dataForGoodTesting)('Is.Function: Should true for $value', ({value}) => {
        expect(Is.Function(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Function: Should false for $value', ({value}) => {
        expect(Is.Function(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Function: Should false for $value', ({value}) => {
        expect(Is.Not.Function(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Function: Should true for $value', ({value}) => {
        expect(Is.Not.Function(value)).toBe(true);
    });

});

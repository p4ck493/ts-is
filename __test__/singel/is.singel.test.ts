import {is} from '../../dist';

describe('is singel', () => {

    const dataForGoodTesting: {value: any}[] = [
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
            value: false
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

    // const dataForBadTesting: {value: any}[] = [
    // ];

    it.each(dataForGoodTesting)('is: Should true for $value', ({value}) => {
        expect(is(value)).toBe(value);
    });

    // it.each(dataForBadTesting)('is: Should false for $value', ({value}) => {
    //     expect(is(value)).toBe(false);
    // });

});

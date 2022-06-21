import {Is} from '../../lib';

describe('Is singel', () => {

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

    const dataForBadTesting: {value: any}[] = [
    ];

    it.each(dataForGoodTesting)('Is: Should true for $value', ({value}) => {
        expect(Is(value)).toBe(value);
    });

    // it.each(dataForBadTesting)('Is: Should false for $value', ({value}) => {
    //     expect(Is(value)).toBe(false);
    // });

});

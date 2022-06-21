import {Is} from '../../lib';

describe('Truth singel', () => {

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
            value: BigInt(1)
        },
        {
            value: {}
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

    const dataForBadTesting: {value: any}[] = [
        {
            value: false
        },
        {
            value: null
        },
        {
            value: undefined
        },
        {
            value: 0
        },
        {
            value: -0
        },
        {
            value: NaN
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
    ];

    it.each(dataForGoodTesting)('Is.Truth: Should true for $value', ({value}) => {
        expect(Is.Truth(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Truth: Should false for $value', ({value}) => {
        expect(Is.Truth(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Truth: Should false for $value', ({value}) => {
        expect(Is.Not.Truth(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Truth: Should true for $value', ({value}) => {
        expect(Is.Not.Truth(value)).toBe(true);
    });

});

import {is} from '../../lib';


class Person {

}

describe('array singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: [],
        },
        {
            value: [0,1,3],
        },
        {
            value: ['0','1','3'],
        },
        {
            value: [true, false],
        },
        {
            value: [NaN],
        },
        {
            value: [{}],
        },
        {
            value: [true, false, 0, 'string', {}, NaN],
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

    it.each(dataForGoodTesting)('is.array: Should true for $value', ({value}) => {
        expect(is.array(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.array: Should false for $value', ({value}) => {
        expect(is.array(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.array: Should false for $value', ({value}) => {
        expect(is.not.array(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.array: Should true for $value', ({value}) => {
        expect(is.not.array(value)).toBe(true);
    });

    const dataForGoodAdvancedTesting: {value: any, classRef: new () => unknown}[] = [
        {
            value: [new Person()],
            classRef: Person
        },
    ];

    it.each(dataForGoodAdvancedTesting)('is.array: Should true for $value & $classRef', ({value, classRef}) => {
        expect(is.array(value, classRef)).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('is.not.array: Should false for $value & $classRef', ({value, classRef}) => {
        expect(is.not.array(value, classRef)).toBe(false);
    });

    // TODO new case
    // const dataForGoodAdvancedTesting1: {value: any}[] = [
    //     {
    //         value: [1],
    //     },
    // ];
    //
    // it.each(dataForGoodAdvancedTesting1)('is.array: Should true for $value', ({value}) => {
    //     expect(is.array.all.number(value)).toBe(true);
    // });

});

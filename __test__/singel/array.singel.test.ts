import {Is} from '../../lib';


class Person {

}

describe('Array singel', () => {

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

    it.each(dataForGoodTesting)('Is.Array: Should true for $value', ({value}) => {
        expect(Is.Array(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Array: Should false for $value', ({value}) => {
        expect(Is.Array(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Array: Should false for $value', ({value}) => {
        expect(Is.Not.Array(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Array: Should true for $value', ({value}) => {
        expect(Is.Not.Array(value)).toBe(true);
    });

    const dataForGoodAdvancedTesting: {value: any, classRef: new () => unknown}[] = [
        {
            value: [new Person()],
            classRef: Person
        },
    ];

    it.each(dataForGoodAdvancedTesting)('Is.Array: Should true for $value & $classRef', ({value, classRef}) => {
        expect(Is.Array(value, classRef)).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('Is.Not.Array: Should false for $value & $classRef', ({value, classRef}) => {
        expect(Is.Not.Array(value, classRef)).toBe(false);
    });

});

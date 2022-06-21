import {findKey} from '../../lib/tools/find-key.tool';

class Person {
    constructor(
        public name: string,
    ) {
    }
}

class Man extends Person {
    constructor(
        public name: string,
        public surname: string,
    ) {
        super(name);
    }
}

class Address {
    constructor(
        public street: string,
    ) {
    }
}

describe('Tools Find Key', () => {

    const dataForGoodTesting: {value: any, object: any}[] = [
        {
            object:{
                personOne: new Person('test1'),
                personTwo: new Person('test2'),
                person: new Person('test'),
            },
            value: new Person('test')
        },
    ];

    const dataForBadTesting: {value: any, object: any}[] = [
        {
            object:{
                personOne: new Person('test1'),
                personTwo: new Person('test2'),
                personThree: new Person('test3'),
            },
            value: new Person('test')
        },
    ];

    it.each(dataForGoodTesting)('findKey: Should true for $value & $object', ({value, object}) => {
        expect(findKey(object, value)).toBe('person');
    });

    it.each(dataForBadTesting)('findKey: Should false for $value & $object', ({value, object}) => {
        expect(findKey(object, value)).toBe(null);
    });

});

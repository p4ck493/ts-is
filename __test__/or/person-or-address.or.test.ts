import {Is} from '../../lib';
import {RegisterInIs} from '../../lib/decorators';

@RegisterInIs({className: 'Person'})
class PersonModel {

}

@RegisterInIs({className: 'Man'})
class ManModel extends PersonModel {

}

@RegisterInIs({className: 'Address'})
class AddressModel {

}

@RegisterInIs()
class AnotherModel {

}

describe('Person.Or.Address or', () => {

    const dataForGoodTesting: { value: any }[] = [
        {
            value: new PersonModel()
        },
        {
            value: new ManModel()
        },
        {
            value: new AddressModel()
        }
    ];

    const dataForBadTesting: { value: any }[] = [
        {
            value: new AnotherModel()
        },
        {
            value: undefined
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
            value: null
        },
        {
            value: Symbol()
        },
        {
            value: NaN
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
            value: Function
        },
        {
            value: () => {
            }
        },
        {
            value: BigInt
        },
        {
            value: Symbol
        },
    ];

    it.each(dataForGoodTesting)('Is.Person.Or.Address: Should true for $value', ({value}) => {
        expect(Is.Person.Or.Address(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Person.Or.Address: Should false for $value', ({value}) => {
        expect(Is.Person.Or.Address(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Person.Or.Address: Should false for $value', ({value}) => {
        expect(Is.Not.Person.Or.Address(value)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Person.Or.Address: Should true for $value', ({value}) => {
        expect(Is.Not.Person.Or.Address(value)).toBe(true);
    });

});

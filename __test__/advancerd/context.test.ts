import {is} from '../../lib';
import {RegisterInIs} from '../../lib/decorators';

@RegisterInIs({
    customMethod: 'customNameOfMethod'
})
class Person {
    public name: string = 'default';
    methodOne() {
        console.log(this);
        return this.name;
    }
    public static customNameOfMethod(argument: unknown): argument is Person {
        console.log(this, Object.keys(this).length, argument); // empty object
        return this.name === 'Ivan'; // return true
        // return this.name === 'Ivan'; // return false and is sad
    }
}

describe('Context', () => {

    const person = new Person();

    it('is.string(person.methodOne()) should be true', () => {

        expect(is.string(person.methodOne())).toBe(true);

    });

    it('is.Person.apply({name: \'Ivan\'}, [person]) should be true', () => {

        expect(is.Person.apply({name: 'Ivan'}, [person])).toBe(true);

    });

    it('is.Person.apply({name: \'Not Ivan\'}, [person]) should be false', () => {

        expect(is.Person.apply({name: 'Not Ivan'}, [person])).toBe(false);

    });

    it('is.Person.call({name: \'Ivan\'}, [person])) should be true', () => {

        expect(is.Person.call({name: 'Ivan'}, person)).toBe(true);

    });

    it('is.Person.call({name: \'Not Ivan\'}, [person])) should be false', () => {

        expect(is.Person.call({name: 'Not Ivan'}, person)).toBe(false);

    });

    // it('[person].some(is.Person) should be true', () => {
    //
    //     person.name = 'Ivan';
    //
    //     // is.Person.bind({custom: 1}); // Bind or take context from argument.
    //
    //     // This way has problem, because I gave bind with execution but later .some also try execute but with result false: false(person)
    //     // Package must return Function type when know about bind
    //     expect([person].some(is.Person.bind({custom: 1}))).toBe(true);
    //
    //
    // });


});

import {is, RegisterInIs} from '../../../dist';

@RegisterInIs()
// @ts-ignore
class Person {
    public testMethod(argument: unknown): boolean {
        return true;
    }
}

@RegisterInIs()
// @ts-ignore
class Address {
}

@RegisterInIs()
// @ts-ignore
class Cart {
    public size: number = 0
}


describe('Model singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new Person()
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
            value: []
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

    it.each(dataForGoodTesting)('is.Person: Should true for $value', ({value}) => {
        expect(is.Person(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Person: Should false for $value', ({value}) => {
        expect(is.Person(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Person: Should false for $value', ({value}) => {
        expect(is.not.Person(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Person: Should true for $value', ({value}) => {
        expect(is.not.Person(value)).toBe(true);
    });

    it('is.Cart(new Cart())', () => {
        expect(is.Cart(new Cart())).toBe(true);
    });

    it('is.Cart.empty(new Cart())', () => {
        expect(is.Cart.empty(new Cart())).toBe(true);
    });

    it('is.Cart.not.empty(new Cart())', () => {
        const cart = new Cart();
        cart.size = 1;
        // @ts-ignore
        expect(is.Cart.not.empty(cart)).toBe(true);
    });

});

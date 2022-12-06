import {is} from '../../../dist';
import {Cart, dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('Model singel', () => {

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
        // TODO add to interface .not. for Model
        expect(is.Cart.not.empty(cart)).toBe(true);
    });

});

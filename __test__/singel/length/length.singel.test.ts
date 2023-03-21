import {is} from '../../../dist';

describe('length singel', () => {

    // LENGTH SUCCESS

    it('is.length_11("Hello world") should true', () => {
        expect(is.length_11("Hello world")).toBe(true);
    });

    it('is.length_3_15("Hello world") should true', () => {
        expect(is.length_3_15("Hello world")).toBe(true);
    });

    it('is.length_range_11_11("Hello world") should true', () => {
        expect(is.length_range_11_11("Hello world")).toBe(true);
    });

    it('is.length_more_10("Hello world") should true', () => {
        expect(is.length_more_10("Hello world")).toBe(true);
    });

    it('is.length_less_12("Hello world") should true', () => {
        expect(is.length_less_12("Hello world")).toBe(true);
    });

    // LENGTH WRONG

    it('is.length_("Hello world") should false', () => {
        expect(is.length_("Hello world")).toBe(false);
    });

    it('is.length_3_("Hello world") should false', () => {
        expect(is.length_3_("Hello world")).toBe(false);
    });

    it('is.length_range_11_("Hello world") should false', () => {
        expect(is.length_range_11_("Hello world")).toBe(false);
    });

    it('is.length_more_asd("Hello world") should false', () => {
        expect(is.length_more_asd("Hello world")).toBe(false);
    });

    it('is.length_less__12("Hello world") should false', () => {
        expect(is.length_less__12("Hello world")).toBe(false);
    });

});

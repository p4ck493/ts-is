import {is, IsConfig} from '../../../dist';

describe('len singel', () => {

    // LENGTH SUCCESS

    it('is.len_11("Hello world") should true', () => {
        expect(is.len_11("Hello world")).toBe(true);
    });

    it('is.len_gt_3_lt_15("Hello world") should true', () => {
        expect(is.len_gt_3_lt_15("Hello world")).toBe(true);
    });

    it('is.len_gte_11_lte_11("Hello world") should true', () => {
        expect(is.len_gte_11_lte_11("Hello world")).toBe(true);
    });

    it('is.len_gt_10("Hello world") should true', () => {
        expect(is.len_gt_10("Hello world")).toBe(true);
    });

    it('is.len_gte_11("Hello world") should true', () => {
        expect(is.len_gte_11("Hello world")).toBe(true);
    });

    it('is.len_lt_12("Hello world") should true', () => {
        expect(is.len_lt_12("Hello world")).toBe(true);
    });

    it('is.len_lte_11("Hello world") should true', () => {
        expect(is.len_lte_11("Hello world")).toBe(true);
    });

    // LENGTH WRONG

    it('is.len_("Hello world") should false', () => {
        IsConfig.error.enabled = false;
        expect(is.len_("Hello world")).toBe(false);
    });

    it('is.len_3_("Hello world") should false', () => {
        expect(is.len_3_("Hello world")).toBe(false);
    });

    it('is.len_gt_asd("Hello world") should false', () => {
        expect(is.len_gt_asd("Hello world")).toBe(false);
    });

    it('is.len_lt__12("Hello world") should false', () => {
        expect(is.len_lt__12("Hello world")).toBe(false);
    });

});

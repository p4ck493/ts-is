import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('string singel', () => {

    // it('is.string: Should true for $value', () => {
    //     // expect(is.string.not.null.or.undefined('is.string: Should true for $value')).toBe(true);
    //     // expect(is.string.null.or.undefined('is.string: Should true for $value')).toBe(true);
    //     expect(is.string.not.null.or.undefined('is.string: Should true for $value')).toBe(true);
    //     // expect(is.array.not.empty.or.null.call({}, 'is.string: Should true for $value')).toBe(true);
    // });

    it.each(dataForGoodTesting)('is.string: Should true for $value', ({value}) => {
        expect(is.string('value')).toBe(true);
    });

    it.each(dataForBadTesting)('is.string: Should false for $value', ({value}) => {
        expect(is.string(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.string: Should false for $value', ({value}) => {
        expect(is.not.string(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.string: Should true for $value', ({value}) => {
        expect(is.not.string(value)).toBe(true);
    });

    it('is.Map(new Map()) should true', () => {
        expect(is.Map(new Map())).toBe(true);
    });

    it('is.not.Map(new Map()) should false', () => {
        expect(is.not.Map(new Map())).toBe(false);
    });

    it('is.Map.apply({}, [new Map()]) should true', () => {
        expect(is.Map.apply({}, [new Map()])).toBe(true);
    });

    it('is.Map.call({}, new Map()) should true', () => {
        expect(is.Map.call({}, new Map())).toBe(true);
    });

    it('is.not.Map.apply({}, [new Map()]) should true', () => {
        expect(is.not.Map.apply({}, [new Map()])).toBe(false);
    });

    it('is.not.Map.call({}, new Map()) should true', () => {
        expect(is.not.Map.call({}, new Map())).toBe(false);
    });

    it('is.length_11("Hello world") should true', () => {
        expect(is.length_15_3("Hello world")).toBe(true);
    });

});

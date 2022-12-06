import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';

describe('Empty Array singel', () => {

    it.each(dataForGoodTesting)('is.array.empty: Should true for $value', ({value}) => {
        expect(is.array.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.array.empty: Should false for $value', ({value}) => {
        expect(is.array.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.array.not.empty: Should false for $value', ({value}) => {
        expect(is.array.not.empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.array.not.empty: Should false for $value', ({value}) => {
        expect(is.array.not.empty(value)).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.array.not.empty: Should true for $value', ({value}) => {
        expect(is.array.not.empty(value)).toBe(true);
    });

});

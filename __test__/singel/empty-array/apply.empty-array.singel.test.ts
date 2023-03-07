import {is} from '../../../src';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';


describe('Empty Array singel: apply', () => {

    it.each(dataForGoodTesting)('is.array.empty: Should true for $value', ({value}) => {
        expect(is.array.empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.array.empty: Should false for $value', ({value}) => {
        expect(is.array.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.array.not.empty: Should false for $value', ({value}) => {
        expect(is.array.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.array.not.empty: Should false for $value', ({value}) => {
        expect(is.array.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.array.not.empty: Should true for $value', ({value}) => {
        expect(is.array.not.empty.apply({}, [value])).toBe(true);
    });

});

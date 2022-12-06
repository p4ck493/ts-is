import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';


describe('Empty String singel: apply', () => {

    it.each(dataForGoodTesting)('is.string.empty: Should true for $value', ({value}) => {
        expect(is.string.empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.string.empty: Should false for $value', ({value}) => {
        expect(is.string.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.string.not.empty: Should false for $value', ({value}) => {
        expect(is.string.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.string.not.empty: Should false for $value', ({value}) => {
        expect(is.string.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.string.not.empty: Should true for $value', ({value}) => {
        expect(is.string.not.empty.apply({}, [value])).toBe(true);
    });

});

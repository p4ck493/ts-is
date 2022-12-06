import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('string singel: apply', () => {

    it.each(dataForGoodTesting)('is.string: Should true for $value', ({value}) => {
        expect(is.string.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.string: Should false for $value', ({value}) => {
        expect(is.string.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.string: Should false for $value', ({value}) => {
        expect(is.not.string.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.string: Should true for $value', ({value}) => {
        expect(is.not.string.apply({}, [value])).toBe(true);
    });

});

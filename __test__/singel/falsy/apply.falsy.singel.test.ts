import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('falsy singel: apply', () => {

    it.each(dataForGoodTesting)('is.falsy: Should true for $value', ({value}) => {
        expect(is.falsy.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.falsy: Should false for $value', ({value}) => {
        expect(is.falsy.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.falsy: Should false for $value', ({value}) => {
        expect(is.not.falsy.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.falsy: Should true for $value', ({value}) => {
        expect(is.not.falsy.apply({}, [value])).toBe(true);
    });

});

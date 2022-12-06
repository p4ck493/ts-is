import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('falsy singel', () => {


    it.each(dataForGoodTesting)('is.falsy: Should true for $value', ({value}) => {
        expect(is.falsy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.falsy: Should false for $value', ({value}) => {
        expect(is.falsy(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.falsy: Should false for $value', ({value}) => {
        expect(is.not.falsy(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.falsy: Should true for $value', ({value}) => {
        expect(is.not.falsy(value)).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('falsy singel: call', () => {


    it.each(dataForGoodTesting)('is.falsy: Should true for $value', ({value}) => {
        expect(is.falsy.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.falsy: Should false for $value', ({value}) => {
        expect(is.falsy.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.falsy: Should false for $value', ({value}) => {
        expect(is.not.falsy.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.falsy: Should true for $value', ({value}) => {
        expect(is.not.falsy.call({}, value)).toBe(true);
    });

});

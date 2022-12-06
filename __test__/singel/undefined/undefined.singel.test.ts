import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('undefined singel', () => {

    it.each(dataForGoodTesting)('is.undefined: Should true for $value', ({value}) => {
        expect(is.undefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.undefined: Should false for $value', ({value}) => {
        expect(is.undefined(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.undefined: Should false for $value', ({value}) => {
        expect(is.not.undefined(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.undefined: Should true for $value', ({value}) => {
        expect(is.not.undefined(value)).toBe(true);
    });

});

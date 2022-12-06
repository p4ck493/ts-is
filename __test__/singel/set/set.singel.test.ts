import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Set singel', () => {

    it.each(dataForGoodTesting)('is.Set: Should true for $value', ({value}) => {
        expect(is.Set(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Set: Should false for $value', ({value}) => {
        expect(is.Set(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Set: Should false for $value', ({value}) => {
        expect(is.not.Set(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Set: Should true for $value', ({value}) => {
        expect(is.not.Set(value)).toBe(true);
    });

});

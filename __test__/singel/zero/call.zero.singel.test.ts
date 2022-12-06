import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Zero singel: call', () => {


    it.each(dataForGoodTesting)('is.zero: Should true for $value', ({value}) => {
        expect(is.zero.call([], value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.zero: Should false for $value', ({value}) => {
        expect(is.zero.call([], value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.zero: Should false for $value', ({value}) => {
        expect(is.not.zero.call([], value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.zero: Should true for $value', ({value}) => {
        expect(is.not.zero.call([], value)).toBe(true);
    });

});

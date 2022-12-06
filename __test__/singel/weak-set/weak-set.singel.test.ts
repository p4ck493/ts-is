import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('WeakSet singel', () => {


    it.each(dataForGoodTesting)('is.WeakSet: Should true for $value', ({value}) => {
        expect(is.WeakSet(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.WeakSet: Should false for $value', ({value}) => {
        expect(is.WeakSet(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.WeakSet: Should false for $value', ({value}) => {
        expect(is.not.WeakSet(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.WeakSet: Should true for $value', ({value}) => {
        expect(is.not.WeakSet(value)).toBe(true);
    });

});

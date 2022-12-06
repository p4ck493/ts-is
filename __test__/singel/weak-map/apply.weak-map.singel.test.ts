import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('WeakMap singel: apply', () => {

    it.each(dataForGoodTesting)('is.WeakMap: Should true for $value', ({value}) => {
        expect(is.WeakMap.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.WeakMap: Should false for $value', ({value}) => {
        expect(is.WeakMap.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.WeakMap: Should false for $value', ({value}) => {
        expect(is.not.WeakMap.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.WeakMap: Should true for $value', ({value}) => {
        expect(is.not.WeakMap.apply({}, [value])).toBe(true);
    });

});

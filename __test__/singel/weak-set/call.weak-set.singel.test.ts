import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('WeakSet singel: call', () => {


    it.each(dataForGoodTesting)('is.WeakSet: Should true for $value', ({value}) => {
        expect(is.WeakSet.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.WeakSet: Should false for $value', ({value}) => {
        expect(is.WeakSet.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.WeakSet: Should false for $value', ({value}) => {
        expect(is.not.WeakSet.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.WeakSet: Should true for $value', ({value}) => {
        expect(is.not.WeakSet.call({}, value)).toBe(true);
    });

});

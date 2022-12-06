import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('false singel: call', () => {

    it.each(dataForGoodTesting)('is.false: Should true for $value', ({value}) => {
        expect(is.false.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.false: Should false for $value', ({value}) => {
        expect(is.false.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.false: Should false for $value', ({value}) => {
        expect(is.not.false.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.false: Should true for $value', ({value}) => {
        expect(is.not.false.call({}, value)).toBe(true);
    });

});

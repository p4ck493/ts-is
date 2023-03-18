import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('odd singel: call', () => {


    it.each(dataForGoodTesting)('is.odd: Should true for $value', ({value}) => {
        expect(is.odd.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.odd: Should false for $value', ({value}) => {
        expect(is.odd.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.odd: Should false for $value', ({value}) => {
        expect(is.not.odd.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.odd: Should true for $value', ({value}) => {
        expect(is.not.odd.call({}, value)).toBe(true);
    });

});

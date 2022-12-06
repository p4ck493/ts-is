import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Date singel: apply', () => {

    it.each(dataForGoodTesting)('is.Date: Should true for $value', ({value}) => {
        expect(is.Date.apply({} , [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Date: Should false for $value', ({value}) => {
        expect(is.Date.apply({} , [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Date: Should false for $value', ({value}) => {
        expect(is.not.Date.apply({} , [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Date: Should true for $value', ({value}) => {
        expect(is.not.Date.apply({} , [value])).toBe(true);
    });

});

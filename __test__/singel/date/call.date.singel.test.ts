import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Date singel: call', () => {

    it.each(dataForGoodTesting)('is.Date: Should true for $value', ({value}) => {
        expect(is.Date.call({} ,value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Date: Should false for $value', ({value}) => {
        expect(is.Date.call({} ,value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Date: Should false for $value', ({value}) => {
        expect(is.not.Date.call({} ,value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Date: Should true for $value', ({value}) => {
        expect(is.not.Date.call({} ,value)).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Error singel', () => {


    it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
        expect(is.Error(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
        expect(is.Error(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Error: Should false for $value', ({value}) => {
        expect(is.not.Error(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Error: Should true for $value', ({value}) => {
        expect(is.not.Error(value)).toBe(true);
    });

});

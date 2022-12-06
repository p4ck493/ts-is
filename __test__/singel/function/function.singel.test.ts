import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('function singel', () => {


    it.each(dataForGoodTesting)('is.function: Should true for $value', ({value}) => {
        expect(is.function(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.function: Should false for $value', ({value}) => {
        expect(is.function(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.function: Should false for $value', ({value}) => {
        expect(is.not.function(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.function: Should true for $value', ({value}) => {
        expect(is.not.function(value)).toBe(true);
    });

});

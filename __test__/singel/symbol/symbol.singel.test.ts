import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('symbol singel', () => {

    it.each(dataForGoodTesting)('is.symbol: Should true for $value', ({value}) => {
        expect(is.symbol(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.symbol: Should false for $value', ({value}) => {
        expect(is.symbol(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.symbol: Should false for $value', ({value}) => {
        expect(is.not.symbol(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.symbol: Should true for $value', ({value}) => {
        expect(is.not.symbol(value)).toBe(true);
    });

});

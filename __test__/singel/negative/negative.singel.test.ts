import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Negative singel', () => {

    it.each(dataForGoodTesting)('is.negative: Should true for $value', ({value}) => {
        expect(is.negative(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.negative: Should false for $value', ({value}) => {
        expect(is.negative(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.negative: Should false for $value', ({value}) => {
        expect(is.not.negative(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.negative: Should true for $value', ({value}) => {
        expect(is.not.negative(value)).toBe(true);
    });

});

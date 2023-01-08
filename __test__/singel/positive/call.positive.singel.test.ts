import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Positive singel: call', () => {


    it.each(dataForGoodTesting)('is.positive: Should true for $value', ({value}) => {
        expect(is.positive.call([], value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.positive: Should false for $value', ({value}) => {
        expect(is.positive.call([], value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.positive: Should false for $value', ({value}) => {
        expect(is.not.positive.call([], value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.positive: Should true for $value', ({value}) => {
        expect(is.not.positive.call([], value)).toBe(true);
    });

});

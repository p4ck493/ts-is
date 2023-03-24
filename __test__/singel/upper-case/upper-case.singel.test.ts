import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('upperCase singel', () => {

    it.each(dataForGoodTesting)('is.upperCase: Should true for $value', ({value}) => {
        expect(is.upperCase(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.upperCase: Should false for $value', ({value}) => {
        expect(is.upperCase(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.upperCase: Should false for $value', ({value}) => {
        expect(is.not.upperCase(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.upperCase: Should true for $value', ({value}) => {
        expect(is.not.upperCase(value)).toBe(true);
    });

});

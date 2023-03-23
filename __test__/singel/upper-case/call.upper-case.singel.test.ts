import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('upperCase singel: call', () => {

    it.each(dataForGoodTesting)('is.upperCase: Should true for $value', ({value}) => {
        expect(is.upperCase.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.upperCase: Should false for $value', ({value}) => {
        expect(is.upperCase.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.upperCase: Should false for $value', ({value}) => {
        expect(is.not.upperCase.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.upperCase: Should true for $value', ({value}) => {
        expect(is.not.upperCase.call({}, value)).toBe(true);
    });

});

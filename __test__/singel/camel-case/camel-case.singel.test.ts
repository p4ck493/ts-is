import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('camelCase singel', () => {

    it.each(dataForGoodTesting)('is.camelCase: Should true for $value', ({value}) => {
        expect(is.camelCase(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.camelCase: Should false for $value', ({value}) => {
        expect(is.camelCase(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.camelCase: Should false for $value', ({value}) => {
        expect(is.not.camelCase(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.camelCase: Should true for $value', ({value}) => {
        expect(is.not.camelCase(value)).toBe(true);
    });

});

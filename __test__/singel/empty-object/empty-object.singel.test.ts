import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';

describe('Empty Object singel', () => {


    it.each(dataForGoodTesting)('is.object.empty: Should true for $value', ({value}) => {
        expect(is.object.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.object.empty: Should false for $value', ({value}) => {
        expect(is.object.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.object.not.empty: Should false for $value', ({value}) => {
        expect(is.object.not.empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.object.not.empty: Should false for $value', ({value}) => {
        expect(is.object.not.empty(value)).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.object.not.empty: Should true for $value', ({value}) => {
        expect(is.object.not.empty(value)).toBe(true);
    });

});

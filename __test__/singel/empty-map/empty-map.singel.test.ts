import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('Empty Map singel', () => {

    it.each(dataForGoodTesting)('is.Map.empty: Should true for $value', ({value}) => {
        expect(is.Map.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Map.empty: Should false for $value', ({value}) => {
        expect(is.Map.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.Map.not.empty: Should false for $value', ({value}) => {
        expect(is.Map.not.empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.Map.not.empty: Should false for $value', ({value}) => {
        expect(is.Map.not.empty(value)).toBe(true);
    });

});

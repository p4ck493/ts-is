import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('empty singel: apply', () => {

    it.each(dataForGoodTesting)('is.empty: Should true for $value', ({value}) => {
        expect(is.empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.empty: Should false for $value', ({value}) => {
        expect(is.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.empty: Should false for $value', ({value}) => {
        expect(is.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.empty: Should true for $value', ({value}) => {
        expect(is.not.empty.apply({}, [value])).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ReferenceError singel: apply', () => {

    it.each(dataForGoodTesting)('is.ReferenceError: Should true for $value', ({value}) => {
        expect(is.ReferenceError.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.ReferenceError: Should false for $value', ({value}) => {
        expect(is.ReferenceError.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.ReferenceError: Should false for $value', ({value}) => {
        expect(is.not.ReferenceError.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ReferenceError: Should true for $value', ({value}) => {
        expect(is.not.ReferenceError.apply({}, [value])).toBe(true);
    });

});

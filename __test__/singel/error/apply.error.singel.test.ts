import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Error singel: apply', () => {

    it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
        expect(is.Error.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
        expect(is.Error.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Error: Should false for $value', ({value}) => {
        expect(is.not.Error.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Error: Should true for $value', ({value}) => {
        expect(is.not.Error.apply({}, [value])).toBe(true);
    });

});

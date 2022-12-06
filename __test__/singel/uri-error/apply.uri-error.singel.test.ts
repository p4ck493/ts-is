import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('URIError singel: apply', () => {

    it.each(dataForGoodTesting)('is.URIError: Should true for $value', ({value}) => {
        expect(is.URIError.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.URIError: Should false for $value', ({value}) => {
        expect(is.URIError.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.URIError: Should false for $value', ({value}) => {
        expect(is.not.URIError.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.URIError: Should true for $value', ({value}) => {
        expect(is.not.URIError.apply({}, [value])).toBe(true);
    });

});

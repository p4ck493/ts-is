import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('bigInt singel: apply', () => {

    it.each(dataForGoodTesting)('is.bigInt: Should true for $value', ({value}) => {
        expect(is.bigInt.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.bigInt: Should false for $value', ({value}) => {
        expect(is.bigInt.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.bigInt: Should false for $value', ({value}) => {
        expect(is.not.bigInt.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.bigInt: Should true for $value', ({value}) => {
        expect(is.not.bigInt.apply({}, [value])).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('bigInt singel: call', () => {

    it.each(dataForGoodTesting)('is.bigInt: Should true for $value', ({value}) => {
        expect(is.bigInt.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.bigInt: Should false for $value', ({value}) => {
        expect(is.bigInt.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.bigInt: Should false for $value', ({value}) => {
        expect(is.not.bigInt.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.bigInt: Should true for $value', ({value}) => {
        expect(is.not.bigInt.call({}, value)).toBe(true);
    });

});

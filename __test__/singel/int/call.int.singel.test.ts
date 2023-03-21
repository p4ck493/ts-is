import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('int singel: call', () => {


    it.each(dataForGoodTesting)('is.int: Should true for $value', ({value}) => {
        expect(is.int.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.int: Should false for $value', ({value}) => {
        expect(is.int.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.int: Should false for $value', ({value}) => {
        expect(is.not.int.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.int: Should true for $value', ({value}) => {
        expect(is.not.int.call({}, value)).toBe(true);
    });

});

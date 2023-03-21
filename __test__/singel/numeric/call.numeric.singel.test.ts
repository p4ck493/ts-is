import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('numeric singel: call', () => {


    it.each(dataForGoodTesting)('is.numeric: Should true for $value', ({value}) => {
        expect(is.numeric.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.numeric: Should false for $value', ({value}) => {
        expect(is.numeric.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.numeric: Should false for $value', ({value}) => {
        expect(is.not.numeric.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.numeric: Should true for $value', ({value}) => {
        expect(is.not.numeric.call({}, value)).toBe(true);
    });

});

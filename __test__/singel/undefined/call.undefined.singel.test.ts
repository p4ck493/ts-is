import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('undefined singel: call', () => {


    it.each(dataForGoodTesting)('is.undefined: Should true for $value', ({value}) => {
        expect(is.undefined.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.undefined: Should false for $value', ({value}) => {
        expect(is.undefined.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.undefined: Should false for $value', ({value}) => {
        expect(is.not.undefined.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.undefined: Should true for $value', ({value}) => {
        expect(is.not.undefined.call({}, value)).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Error singel: call', () => {


    it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
        expect(is.Error.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
        expect(is.Error.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Error: Should false for $value', ({value}) => {
        expect(is.not.Error.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Error: Should true for $value', ({value}) => {
        expect(is.not.Error.call({}, value)).toBe(true);
    });

});

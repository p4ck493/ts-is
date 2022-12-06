import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('null singel: call', () => {


    it.each(dataForGoodTesting)('is.null: Should true for $value', ({value}) => {
        expect(is.null.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.null: Should false for $value', ({value}) => {
        expect(is.null.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.null: Should false for $value', ({value}) => {
        expect(is.not.null.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.null: Should true for $value', ({value}) => {
        expect(is.not.null.call({}, value)).toBe(true);
    });

});

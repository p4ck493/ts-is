import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('null singel', () => {


    it.each(dataForGoodTesting)('is.null: Should true for $value', ({value}) => {
        expect(is.null(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.null: Should false for $value', ({value}) => {
        expect(is.null(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.null: Should false for $value', ({value}) => {
        expect(is.not.null(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.null: Should true for $value', ({value}) => {
        expect(is.not.null(value)).toBe(true);
    });

});

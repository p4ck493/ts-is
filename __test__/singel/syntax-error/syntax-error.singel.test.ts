import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('SyntaxError singel', () => {


    it.each(dataForGoodTesting)('is.SyntaxError: Should true for $value', ({value}) => {
        expect(is.SyntaxError(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.SyntaxError: Should false for $value', ({value}) => {
        expect(is.SyntaxError(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.SyntaxError: Should false for $value', ({value}) => {
        expect(is.not.SyntaxError(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.SyntaxError: Should true for $value', ({value}) => {
        expect(is.not.SyntaxError(value)).toBe(true);
    });

});

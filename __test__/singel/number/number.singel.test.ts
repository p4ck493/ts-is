import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('number singel', () => {


    it.each(dataForGoodTesting)('is.number: Should true for $value', ({value}) => {
        expect(is.number(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.number: Should false for $value', ({value}) => {
        expect(is.number(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.number: Should false for $value', ({value}) => {
        expect(is.not.number(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.number: Should true for $value', ({value}) => {
        expect(is.not.number(value)).toBe(true);
    });

});

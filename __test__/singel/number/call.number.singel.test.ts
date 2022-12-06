import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('number singel: call', () => {


    it.each(dataForGoodTesting)('is.number: Should true for $value', ({value}) => {
        expect(is.number.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.number: Should false for $value', ({value}) => {
        expect(is.number.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.number: Should false for $value', ({value}) => {
        expect(is.not.number.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.number: Should true for $value', ({value}) => {
        expect(is.not.number.call({}, value)).toBe(true);
    });

});

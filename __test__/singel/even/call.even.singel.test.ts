import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('even singel: call', () => {


    it.each(dataForGoodTesting)('is.even: Should true for $value', ({value}) => {
        expect(is.even.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.even: Should false for $value', ({value}) => {
        expect(is.even.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.even: Should false for $value', ({value}) => {
        expect(is.not.even.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.even: Should true for $value', ({value}) => {
        expect(is.not.even.call({}, value)).toBe(true);
    });

});

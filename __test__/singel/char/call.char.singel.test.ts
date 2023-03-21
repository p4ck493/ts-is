import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('char singel: call', () => {

    it.each(dataForGoodTesting)('is.char: Should true for $value', ({value}) => {
        expect(is.char.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.char: Should false for $value', ({value}) => {
        expect(is.char.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.char: Should false for $value', ({value}) => {
        expect(is.not.char.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.char: Should true for $value', ({value}) => {
        expect(is.not.char.call({}, value)).toBe(true);
    });

});

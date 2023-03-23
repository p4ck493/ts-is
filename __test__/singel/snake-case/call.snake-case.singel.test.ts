import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('snakeCase singel: call', () => {

    it.each(dataForGoodTesting)('is.snakeCase: Should true for $value', ({value}) => {
        expect(is.snakeCase.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.snakeCase: Should false for $value', ({value}) => {
        expect(is.snakeCase.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.snakeCase: Should false for $value', ({value}) => {
        expect(is.not.snakeCase.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.snakeCase: Should true for $value', ({value}) => {
        expect(is.not.snakeCase.call({}, value)).toBe(true);
    });

});

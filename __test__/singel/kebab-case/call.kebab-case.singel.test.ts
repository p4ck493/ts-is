import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('kebabCase singel: call', () => {

    it.each(dataForGoodTesting)('is.kebabCase: Should true for $value', ({value}) => {
        expect(is.kebabCase.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.kebabCase: Should false for $value', ({value}) => {
        expect(is.kebabCase.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.kebabCase: Should false for $value', ({value}) => {
        expect(is.not.kebabCase.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.kebabCase: Should true for $value', ({value}) => {
        expect(is.not.kebabCase.call({}, value)).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('truthy singel: call', () => {


    it.each(dataForGoodTesting)('is.truthy: Should true for $value', ({value}) => {
        expect(is.truthy.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.truthy: Should false for $value', ({value}) => {
        expect(is.truthy.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.truthy: Should false for $value', ({value}) => {
        expect(is.not.truthy.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.truthy: Should true for $value', ({value}) => {
        expect(is.not.truthy.call({}, value)).toBe(true);
    });

});

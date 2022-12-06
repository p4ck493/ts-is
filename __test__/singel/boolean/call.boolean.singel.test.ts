import {is} from '../../../dist';

import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('boolean singel: call', () => {


    it.each(dataForGoodTesting)('is.boolean: Should true for $value', ({value}) => {
        expect(is.boolean.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.boolean: Should false for $value', ({value}) => {
        expect(is.boolean.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.boolean: Should false for $value', ({value}) => {
        expect(is.not.boolean.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.boolean: Should true for $value', ({value}) => {
        expect(is.not.boolean.call({}, value)).toBe(true);
    });

});

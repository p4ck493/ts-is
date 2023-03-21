import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('ipv6 singel: call', () => {


    it.each(dataForGoodTesting)('is.ipv6: Should true for $value', ({value}) => {
        expect(is.ipv6.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.ipv6: Should false for $value', ({value}) => {
        expect(is.ipv6.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.ipv6: Should false for $value', ({value}) => {
        expect(is.not.ipv6.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ipv6: Should true for $value', ({value}) => {
        expect(is.not.ipv6.call({}, value)).toBe(true);
    });

});

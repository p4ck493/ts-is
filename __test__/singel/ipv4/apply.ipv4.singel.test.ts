import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('ipv4 singel: apply', () => {

    it.each(dataForGoodTesting)('is.ipv4: Should true for $value', ({value}) => {
        expect(is.ipv4.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.ipv4: Should false for $value', ({value}) => {
        expect(is.ipv4.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.ipv4: Should false for $value', ({value}) => {
        expect(is.not.ipv4.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.ipv4: Should true for $value', ({value}) => {
        expect(is.not.ipv4.apply({}, [value])).toBe(true);
    });

});

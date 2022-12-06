import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('false singel: apply', () => {

    it.each(dataForGoodTesting)('is.false: Should true for $value', ({value}) => {
        expect(is.false.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.false: Should false for $value', ({value}) => {
        expect(is.false.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.false: Should false for $value', ({value}) => {
        expect(is.not.false.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.false: Should true for $value', ({value}) => {
        expect(is.not.false.apply({}, [value])).toBe(true);
    });

});

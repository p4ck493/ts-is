import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('numeric singel: apply', () => {

    it.each(dataForGoodTesting)('is.numeric: Should true for $value', ({value}) => {
        expect(is.numeric.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.numeric: Should false for $value', ({value}) => {
        expect(is.numeric.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.numeric: Should false for $value', ({value}) => {
        expect(is.not.numeric.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.numeric: Should true for $value', ({value}) => {
        expect(is.not.numeric.apply({}, [value])).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('boolean singel: apply', () => {

    it.each(dataForGoodTesting)('is.boolean: Should true for $value', ({value}) => {
        expect(is.boolean.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.boolean: Should false for $value', ({value}) => {
        expect(is.boolean.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.boolean: Should false for $value', ({value}) => {
        expect(is.not.boolean.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.boolean: Should true for $value', ({value}) => {
        expect(is.not.boolean.apply({}, [value])).toBe(true);
    });

});

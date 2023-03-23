import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('camelCase singel: apply', () => {

    it.each(dataForGoodTesting)('is.camelCase: Should true for $value', ({value}) => {
        expect(is.camelCase.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.camelCase: Should false for $value', ({value}) => {
        expect(is.camelCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.camelCase: Should false for $value', ({value}) => {
        expect(is.not.camelCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.camelCase: Should true for $value', ({value}) => {
        expect(is.not.camelCase.apply({}, [value])).toBe(true);
    });

});

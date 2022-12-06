import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './fixtures';


describe('Empty Object singel: apply', () => {

    it.each(dataForGoodTesting)('is.object.empty: Should true for $value', ({value}) => {
        expect(is.object.empty.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.object.empty: Should false for $value', ({value}) => {
        expect(is.object.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.object.not.empty: Should false for $value', ({value}) => {
        expect(is.object.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.object.not.empty: Should false for $value', ({value}) => {
        expect(is.object.not.empty.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.object.not.empty: Should true for $value', ({value}) => {
        expect(is.object.not.empty.apply({}, [value])).toBe(true);
    });

});

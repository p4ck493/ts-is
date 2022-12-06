import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Model singel: apply', () => {


    it.each(dataForGoodTesting)('is.Person: Should true for $value', ({value}) => {
        expect(is.Person.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.Person: Should false for $value', ({value}) => {
        expect(is.Person.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.Person: Should false for $value', ({value}) => {
        expect(is.not.Person.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.Person: Should true for $value', ({value}) => {
        expect(is.not.Person.apply({}, [value])).toBe(true);
    });

});

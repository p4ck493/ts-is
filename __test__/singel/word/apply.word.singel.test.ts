import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('word singel: apply', () => {

    it.each(dataForGoodTesting)('is.word: Should true for $value', ({value}) => {
        expect(is.word.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.word: Should false for $value', ({value}) => {
        expect(is.word.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.word: Should false for $value', ({value}) => {
        expect(is.not.word.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.word: Should true for $value', ({value}) => {
        expect(is.not.word.apply({}, [value])).toBe(true);
    });

});

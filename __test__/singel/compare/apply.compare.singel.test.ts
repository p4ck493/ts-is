import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('Object singel: apply', () => {

    it.each(dataForGoodTesting)('is.compare: Should true for $first === $second', ({first, second}) => {
        expect(is.compare.apply({}, [first, second] as any)).toBe(true);
    });

    it.each(dataForBadTesting)('is.compare: Should false for $first === $second', ({first, second}) => {
        expect(is.compare.apply({}, [first, second] as any)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.compare: Should false for $first === $second', ({first, second}) => {
        expect(is.not.compare.apply({}, [first, second] as any)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.compare: Should true for $first === $second', ({first, second}) => {
        expect(is.not.compare.apply({}, [first, second] as any)).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Object singel: call', () => {

    it.each(dataForGoodTesting)('is.compare: Should true for $first === $second', ({first, second}) => {
        expect((is.compare.call as any)({}, first, second)).toBe(true);
    });

    it.each(dataForBadTesting)('is.compare: Should false for $first === $second', ({first, second}) => {
        expect((is.compare.call as any)({}, first, second)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.compare: Should false for $first === $second', ({first, second}) => {
        expect((is.not.compare.call as any)({}, first, second)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.compare: Should true for $first === $second', ({first, second}) => {
        expect((is.not.compare.call as any)({}, first, second)).toBe(true);
    });

});

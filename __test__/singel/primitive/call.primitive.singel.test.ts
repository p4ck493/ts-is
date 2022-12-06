import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Primitive singel: call', () => {

    it.each(dataForGoodTesting)('is.primitive: Should true for $value', ({value}) => {
        expect(is.primitive.call([], value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.primitive: Should false for $value', ({value}) => {
        expect(is.primitive.call([], value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.primitive: Should false for $value', ({value}) => {
        expect(is.not.primitive.call([], value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.primitive: Should true for $value', ({value}) => {
        expect(is.not.primitive.call([], value)).toBe(true);
    });

});

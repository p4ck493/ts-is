import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('EvalError singel', () => {


    it.each(dataForGoodTesting)('is.EvalError: Should true for $value', ({value}) => {
        expect(is.EvalError(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.EvalError: Should false for $value', ({value}) => {
        expect(is.EvalError(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.EvalError: Should false for $value', ({value}) => {
        expect(is.not.EvalError(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.EvalError: Should true for $value', ({value}) => {
        expect(is.not.EvalError(value)).toBe(true);
    });

});

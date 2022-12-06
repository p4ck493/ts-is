import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('EvalError singel: call', () => {


    it.each(dataForGoodTesting)('is.EvalError: Should true for $value', ({value}) => {
        expect(is.EvalError.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.EvalError: Should false for $value', ({value}) => {
        expect(is.EvalError.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.EvalError: Should false for $value', ({value}) => {
        expect(is.not.EvalError.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.EvalError: Should true for $value', ({value}) => {
        expect(is.not.EvalError.call({}, value)).toBe(true);
    });

});

import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('pascalCase singel: apply', () => {

    it.each(dataForGoodTesting)('is.pascalCase: Should true for $value', ({value}) => {
        expect(is.pascalCase.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.pascalCase: Should false for $value', ({value}) => {
        expect(is.pascalCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.pascalCase: Should false for $value', ({value}) => {
        expect(is.not.pascalCase.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.pascalCase: Should true for $value', ({value}) => {
        expect(is.not.pascalCase.apply({}, [value])).toBe(true);
    });

});

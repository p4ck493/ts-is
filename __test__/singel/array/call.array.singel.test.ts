import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodAdvancedTesting, dataForGoodTesting} from './fixtures';


describe('array singel: call', () => {

    it.each(dataForGoodTesting)('is.array: Should true for $value', ({value}) => {
        expect(is.array.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.array: Should false for $value', ({value}) => {
        expect(is.array.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.array: Should false for $value', ({value}) => {
        expect(is.not.array.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.array: Should true for $value', ({value}) => {
        expect(is.not.array.call({}, value)).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('is.array: Should true for $value & $classRef', ({value, classRef}) => {
        expect(is.array(value, classRef)).toBe(true);
    });

    it.each(dataForGoodAdvancedTesting)('is.not.array: Should false for $value & $classRef', ({value, classRef}) => {
        expect(is.not.array(value, classRef)).toBe(false);
    });


});

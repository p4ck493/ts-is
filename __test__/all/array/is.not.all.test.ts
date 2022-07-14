import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.array', () => {

    it.each(dataForBadTesting)('is.all.not.array: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.array(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.array: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.array(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.not.array: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.array(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.array: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.array(value)).toBe(false);
    });

});

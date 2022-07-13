import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.empty', () => {

    it.each(dataForBadTesting)('is.all.not.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.empty(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.empty(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.empty(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.empty(value)).toBe(false);
    });

});

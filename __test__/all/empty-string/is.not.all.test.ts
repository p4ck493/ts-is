import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './state';


describe('is.all.string.not.empty', () => {

    it.each(dataForGoodCaseTesting)('is.all.string.not.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.string.not.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.string.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.string.not.empty(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.string.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.string.not.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.all.string.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.string.not.empty(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.string.all.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.string.all.empty(value)).toBe(false);
    });

});

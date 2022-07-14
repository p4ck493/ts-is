import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodCaseTesting, dataForGoodTesting} from './state';


describe('is.all.array.not.empty', () => {

    it.each(dataForBadTesting)('is.all.array.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.array.not.empty(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.array.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.array.not.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.all.array.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.array.not.empty(value)).toBe(false);
    });

    it.each(dataForGoodCaseTesting)('is.all.array.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.array.not.empty(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.array.all.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.array.all.empty(value)).toBe(false);
    });

});

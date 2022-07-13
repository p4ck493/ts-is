import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.object.not.empty', () => {

    it.each(dataForBadTesting)('is.all.object.not.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.object.not.empty(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.object.not.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.object.not.empty(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.object.not.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.object.not.empty(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.object.all.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.object.all.empty(value)).toBe(false);
    });

});

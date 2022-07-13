import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.Truthy', () => {

    it.each(dataForBadTesting)('is.all.not.Truthy: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Truthy(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Truthy: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Truthy(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.Truthy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Truthy(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.truthy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.truthy(value)).toBe(false);
    });

});

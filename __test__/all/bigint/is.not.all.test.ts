import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.bigInt', () => {

    it.each(dataForBadTesting)('is.all.not.bigInt: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.bigInt(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.bigInt: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.bigInt(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.all.not.bigInt: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.bigInt(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.bigInt: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.bigInt(value)).toBe(false);
    });

});

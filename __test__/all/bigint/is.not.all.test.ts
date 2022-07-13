import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.BigInt', () => {

    it.each(dataForBadTesting)('is.all.not.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.BigInt(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.BigInt(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.not.BigInt: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.BigInt(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.BigInt: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.BigInt(value)).toBe(false);
    });

});

import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.boolean', () => {

    it.each(dataForBadTesting)('is.all.not.boolean: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.boolean(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.boolean: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.boolean(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.all.not.boolean: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.boolean(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.boolean: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.boolean(value)).toBe(false);
    });

});

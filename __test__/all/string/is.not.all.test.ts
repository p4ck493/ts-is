import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.string', () => {

    it.each(dataForBadTesting)('is.all.not.string: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.string(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.string: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.string(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.string: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.string(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.string: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.string(value)).toBe(false);
    });

});

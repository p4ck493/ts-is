import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.String', () => {

    it.each(dataForBadTesting)('is.all.not.String: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.String(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.String: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.String(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.String: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.String(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.string: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.string(value)).toBe(false);
    });

});

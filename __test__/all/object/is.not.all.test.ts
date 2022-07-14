import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.object', () => {

    it.each(dataForBadTesting)('is.all.not.object: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.object(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.object: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.object(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.object: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.object(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.object: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.object(value)).toBe(false);
    });

});

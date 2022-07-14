import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.number', () => {

    it.each(dataForBadTesting)('is.all.not.number: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.number(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.number: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.number(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.number: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.number(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.number: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.number(value)).toBe(false);
    });

});

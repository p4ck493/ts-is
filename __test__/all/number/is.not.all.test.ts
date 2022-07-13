import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.Number', () => {

    it.each(dataForBadTesting)('is.all.not.Number: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Number(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Number: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Number(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.Number: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Number(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.number: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.number(value)).toBe(false);
    });

});

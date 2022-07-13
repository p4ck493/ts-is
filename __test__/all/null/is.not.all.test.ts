import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.Null', () => {

    it.each(dataForBadTesting)('is.all.not.Null: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Null(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Null: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Null(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.Null: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Null(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.null: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.null(value)).toBe(false);
    });

});

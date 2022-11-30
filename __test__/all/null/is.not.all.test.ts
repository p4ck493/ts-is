import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.null', () => {

    it.each(dataForBadTesting)('is.all.not.null: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.null(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.null: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.null(value)).toBe(false);
    });


    it.each(dataForGoodTesting)('is.all.not.null: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.null(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.null: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.null(value)).toBe(false);
    });

});

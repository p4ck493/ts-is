import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Null', () => {

    it.each(dataForBadTesting)('Is.All.Not.Null: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Null: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Null: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Null: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Null(value)).toBe(false);
    });

});

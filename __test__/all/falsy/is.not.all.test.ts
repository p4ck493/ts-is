import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Falsy', () => {

    it.each(dataForBadTesting)('Is.All.Not.Falsy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Falsy(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Falsy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Falsy(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Falsy: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Falsy(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Falsy: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Falsy(value)).toBe(false);
    });

});

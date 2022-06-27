import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Truthy', () => {

    it.each(dataForBadTesting)('Is.All.Not.Truthy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Truthy(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Truthy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Truthy(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Truthy: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Truthy(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Truthy: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Truthy(value)).toBe(false);
    });

});

import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Boolean', () => {

    it.each(dataForBadTesting)('Is.All.Not.Boolean: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Boolean(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Boolean: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Boolean(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.Boolean: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Boolean(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Boolean: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Boolean(value)).toBe(false);
    });

});

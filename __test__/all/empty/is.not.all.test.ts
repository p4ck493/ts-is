import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Empty', () => {

    it.each(dataForBadTesting)('Is.All.Not.Empty: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Empty(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Empty: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Empty(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.Empty: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Empty(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Empty: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Empty(value)).toBe(false);
    });

});

import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.EmptyString', () => {

    it.each(dataForBadTesting)('Is.All.Not.EmptyString: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyString(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.EmptyString: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyString(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.EmptyString: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyString(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.EmptyString: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyString(value)).toBe(false);
    });

});

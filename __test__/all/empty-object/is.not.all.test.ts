import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.EmptyObject', () => {

    it.each(dataForBadTesting)('Is.All.Not.EmptyObject: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyObject(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.EmptyObject: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyObject(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.EmptyObject: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyObject(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.EmptyObject: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyObject(value)).toBe(false);
    });

});

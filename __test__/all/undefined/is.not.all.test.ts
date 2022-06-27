import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Undefined', () => {

    it.each(dataForBadTesting)('Is.All.Not.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Undefined(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Undefined(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Undefined(value)).toBe(false);
    });

});

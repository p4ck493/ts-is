import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.String', () => {

    it.each(dataForBadTesting)('Is.All.Not.String: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.String(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.String: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.String(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.String: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.String(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.String: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.String(value)).toBe(false);
    });

});

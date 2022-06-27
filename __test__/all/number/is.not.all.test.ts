import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Number', () => {

    it.each(dataForBadTesting)('Is.All.Not.Number: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Number(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Number: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Number(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Number: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Number(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Number: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Number(value)).toBe(false);
    });

});

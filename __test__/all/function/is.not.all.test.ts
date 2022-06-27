import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Function', () => {

    it.each(dataForBadTesting)('Is.All.Not.Function: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Function(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Function: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Function(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Function: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Function(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Function: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Function(value)).toBe(false);
    });

});

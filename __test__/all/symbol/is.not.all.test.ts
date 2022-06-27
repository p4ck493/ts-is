import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Symbol', () => {

    it.each(dataForBadTesting)('Is.All.Not.Symbol: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Symbol(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Symbol: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Symbol(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Symbol: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Symbol(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Symbol: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Symbol(value)).toBe(false);
    });

});

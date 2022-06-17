import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Symbol', () => {

    it.each(dataForBadTesting)('Is.All.Not.Symbol: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Symbol(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Symbol: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Symbol(value)).toBe(true);
    });

});

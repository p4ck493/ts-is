import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Symbol', () => {

    it.each(dataForGoodTesting)('Is.All.Symbol: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Symbol(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Symbol: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Symbol(value)).toBe(false);
    });

});

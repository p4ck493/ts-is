import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.false', () => {

    it.each(dataForGoodTesting)('Is.All.Falsy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Falsy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Falsy: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Falsy(value)).toBe(false);
    });

});

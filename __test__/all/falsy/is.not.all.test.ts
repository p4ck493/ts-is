import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Falsy', () => {

    it.each(dataForBadTesting)('Is.All.Not.Falsy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Falsy(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Falsy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Falsy(value)).toBe(true);
    });

});

import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Boolean', () => {

    it.each(dataForBadTesting)('Is.All.Not.Boolean: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Boolean(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Boolean: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Boolean(value)).toBe(true);
    });

});

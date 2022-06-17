import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Number', () => {

    it.each(dataForBadTesting)('Is.All.Not.Number: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Number(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Number: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Number(value)).toBe(true);
    });

});

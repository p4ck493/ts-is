import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.String', () => {

    it.each(dataForBadTesting)('Is.All.Not.String: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.String(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.String: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.String(value)).toBe(true);
    });

});

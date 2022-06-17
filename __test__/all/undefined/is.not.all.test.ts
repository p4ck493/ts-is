import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Undefined', () => {

    it.each(dataForBadTesting)('Is.All.Not.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Undefined(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Undefined(value)).toBe(true);
    });

});

import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Function', () => {

    it.each(dataForBadTesting)('Is.All.Not.Function: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Function(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Function: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Function(value)).toBe(true);
    });

});

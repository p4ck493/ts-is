import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Object', () => {

    it.each(dataForBadTesting)('Is.All.Not.Object: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Object(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Object: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Object(value)).toBe(true);
    });

});

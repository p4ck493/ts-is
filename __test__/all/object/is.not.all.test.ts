import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Object', () => {

    it.each(dataForBadTesting)('Is.All.Not.Object: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Object(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Object: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Object(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Object: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Object(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Object: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Object(value)).toBe(false);
    });

});

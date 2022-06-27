import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Empty', () => {

    it.each(dataForGoodTesting)('Is.All.Empty: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Empty: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Empty(value)).toBe(false);
    });

});

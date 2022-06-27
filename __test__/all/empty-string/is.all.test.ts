import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.EmptyString', () => {

    it.each(dataForGoodTesting)('Is.All.EmptyString: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyString(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.EmptyString: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyString(value)).toBe(false);
    });

});

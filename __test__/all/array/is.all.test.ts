import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Array', () => {

    it.each(dataForGoodTesting)('Is.All.Array: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Array(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Array: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Array(value)).toBe(false);
    });

});

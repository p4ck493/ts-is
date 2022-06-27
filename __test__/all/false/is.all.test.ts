import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.False', () => {

    it.each(dataForGoodTesting)('Is.All.False: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.False(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.False: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.False(value)).toBe(false);
    });

});

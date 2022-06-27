import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.True', () => {

    it.each(dataForGoodTesting)('Is.All.True: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.True(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.True: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.True(value)).toBe(false);
    });

});

import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.True', () => {

    it.each(dataForGoodTesting)('Is.All.True: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.True(value)).toBe(true);
    });

});

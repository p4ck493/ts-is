import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Number', () => {

    it.each(dataForGoodTesting)('Is.All.Number: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Number(value)).toBe(true);
    });

});

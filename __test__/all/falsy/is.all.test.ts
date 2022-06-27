import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.false', () => {

    it.each(dataForGoodTesting)('Is.All.Falsy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Falsy(value)).toBe(true);
    });

});

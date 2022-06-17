import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Null', () => {

    it.each(dataForGoodTesting)('Is.All.Null: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Null(value)).toBe(true);
    });

});

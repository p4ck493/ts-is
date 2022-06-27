import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Null', () => {

    it.each(dataForGoodTesting)('Is.All.Null: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Null(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Null: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Null(value)).toBe(false);
    });

});

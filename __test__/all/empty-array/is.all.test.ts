import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.EmptyArray', () => {

    it.each(dataForGoodTesting)('Is.All.EmptyArray: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyArray(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.EmptyArray: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyArray(value)).toBe(false);
    });

});

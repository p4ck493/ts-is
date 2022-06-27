import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.EmptyObject', () => {

    it.each(dataForGoodTesting)('Is.All.EmptyObject: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyObject(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.EmptyObject: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyObject(value)).toBe(false);
    });

});

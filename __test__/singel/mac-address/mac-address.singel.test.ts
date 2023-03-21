import {is} from '../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('macAddress singel', () => {


    it.each(dataForGoodTesting)('is.macAddress: Should true for $value', ({value}) => {
        expect(is.macAddress(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.macAddress: Should false for $value', ({value}) => {
        expect(is.macAddress(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.macAddress: Should false for $value', ({value}) => {
        expect(is.not.macAddress(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.macAddress: Should true for $value', ({value}) => {
        expect(is.not.macAddress(value)).toBe(true);
    });

});

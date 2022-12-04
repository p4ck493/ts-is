import {is} from '../../../dist';


describe('Object singel: call', () => {

    const dataForGoodTesting: {first: any, second: any}[] = [
        {
            first: {
                a: 1
            },
            second: {
                a: 1
            }
        },
        {
            first: {},
            second: {}
        },
        {
            first: {
                property: {
                    string: 'string'
                }
            },
            second: {
                property: {
                    string: 'string'
                }
            }
        },
    ];

    const dataForBadTesting: {first: any, second: any}[] = [
        {
            first: {
                a: 2
            },
            second: {
                a: 1
            }
        },
    ];

    it.each(dataForGoodTesting)('is.compare: Should true for $first === $second', ({first, second}) => {
        expect((is.compare.call as any)({}, first, second)).toBe(true);
    });

    it.each(dataForBadTesting)('is.compare: Should false for $first === $second', ({first, second}) => {
        expect((is.compare.call as any)({}, first, second)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.compare: Should false for $first === $second', ({first, second}) => {
        expect((is.not.compare.call as any)({}, first, second)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.compare: Should true for $first === $second', ({first, second}) => {
        expect((is.not.compare.call as any)({}, first, second)).toBe(true);
    });

});

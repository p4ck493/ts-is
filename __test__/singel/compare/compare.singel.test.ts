import {is} from '../../../lib';


describe('Object singel', () => {

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
        {
            first: {
            },
            second: {
                a: 1
            }
        },
        {
            first: {
                a: 2
            },
            second: {
            }
        },
    ];

    it.each(dataForGoodTesting)('is.compare: Should true for $first === $second', ({first, second}) => {
        expect(is.compare(first, second)).toBe(true);
    });

    it.each(dataForBadTesting)('is.compare: Should false for $first === $second', ({first, second}) => {
        expect(is.compare(first, second)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.compare: Should false for $first === $second', ({first, second}) => {
        expect(is.not.compare(first, second)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.compare: Should true for $first === $second', ({first, second}) => {
        expect(is.not.compare(first, second)).toBe(true);
    });

});

import {is} from '../../lib';
import {BroadcastChannel} from 'broadcast-channel'

describe('BroadcastChannel singel', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new BroadcastChannel('test'),
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: new DataView(new ArrayBuffer(16), 0),
        },
        {
            value: new WeakSet(),
        },
        {
            value: new Set(),
        },
        {
            value: [],
        },
        {
            value: [0,1,3],
        },
        {
            value: ['0','1','3'],
        },
        {
            value: [true, false],
        },
        {
            value: [NaN],
        },
        {
            value: [{}],
        },
        {
            value: [true, false, 0, 'string', {}, NaN],
        },
        {
            value: 'undefined'
        },
        {
            value: 'null'
        },
        {
            value: Symbol()
        },
        {
            value: true
        },
        {
            value: false
        },
        {
            value: BigInt(1)
        },
        {
            value: ""
        },
        {
            value: ''
        },
        {
            value: ``
        },
        {
            value: {}
        },
        {
            value: 0
        },
        {
            value: null
        },
        {
            value: undefined
        },
        {
            value: Function
        },
        {
            value: () => {}
        },
        {
            value: BigInt
        },
        {
            value: Symbol
        },
        {
            value: NaN
        },
    ];

    it.each(dataForGoodTesting)('is.broadcastChannel: Should true for $value', ({value}) => {
        expect(is.broadcastChannel(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.broadcastChannel: Should false for $value', ({value}) => {
        expect(is.broadcastChannel(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.not.broadcastChannel: Should false for $value', ({value}) => {
        expect(is.not.broadcastChannel(value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.not.broadcastChannel: Should true for $value', ({value}) => {
        expect(is.not.broadcastChannel(value)).toBe(true);
    });

    afterAll(() => {
        dataForGoodTesting[0].value.unref();
    })

});

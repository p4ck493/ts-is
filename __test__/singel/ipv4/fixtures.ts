export const dataForGoodTesting: { value: any }[] = [
    {
        value: '192.168.1.1'
    },
    {
        value: '255.255.255.0'
    },
    {
        value: '10.0.0.1'
    },
    {
        value: '172.16.0.1'
    },
];

export const dataForBadTesting: { value: any }[] = [
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
        value: null
    },
    {
        value: true
    },
    {
        value: BigInt(1)
    },
    {
        value: []
    },
    {
        value: false
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
        value: undefined
    },
    {
        value: Function
    },
    {
        value: () => {
        }
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
    {
        value: Infinity
    },
    {
        value: -Infinity
    },
    {
        value: Number.POSITIVE_INFINITY,
    },
    {
        value: Number.NEGATIVE_INFINITY,
    },
    {
        value: 0
    },
    {
        value: '2001:db8:::2:1'
    },
    {
        value: '2001:::1'
    },
    {
        value: '2001:db8::1::'
    },
    {
        value: '2001:db8::g:1'
    },
    {
        value: '::ffff:192.0.2.256'
    },
    {
        value: '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
    },
    {
        value: '2001:db8:0:0:0:0:2:1'
    },
    {
        value: '2001:db8::2:1'
    },
    {
        value: '::'
    },
    {
        value: '::1'
    },
    {
        value: '::ffff:192.0.2.128'
    },
    {
        value: '2001:db8::567:1'
    },

    {
        value: '256.0.0.1'
    },
    {
        value: '192.168.1.256'
    },
    {
        value: '1.2.3.4.5'
    },
    {
        value: '192.168.1'
    },
    {
        value: '192.168.1.'
    },
    {
        value: '.192.168.1.1'
    },
    {
        value: '192.168.1.1.'
    },
];

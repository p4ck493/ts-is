export const dataForGoodTesting: { value: any }[] = [
    {
        value: 1
    },
    {
        value: -1
    },
    {
        value: BigInt(1)
    },
    {
        value: 1n
    },
    {
        value: -31n
    },
];

export const dataForBadTesting: { value: any }[] = [
    {
        value: 0
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
        value: null
    },
    {
        value: true
    },
    {
        value: BigInt(2)
    },
    {
        value: 2n
    },
    {
        value: -2n
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
];

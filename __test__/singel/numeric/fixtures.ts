export const dataForGoodTesting: { value: any }[] = [
    {
        value: 0
    },
    {
        value: '0'
    },
    {
        value: '-0'
    },
    {
        value: '+0'
    },
    {
        value: '-2'
    },
    {
        value: '+2'
    },
    {
        value: '2'
    },
    {
        value: 4n
    },
    {
        value: -3n
    },
    {
        value: '2n'
    },
    {
        value: '-5n'
    },
    {
        value: BigInt(1)
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

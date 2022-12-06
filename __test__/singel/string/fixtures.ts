

export const dataForGoodTesting: {value: any}[] = [
    {
        value: 'undefined'
    },
    {
        value: 'null'
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
        value: ``
    },
    {
        value: `3`
    },
    {
        value: `1`
    },
    {
        value: `2`
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: Symbol()
    },
    {
        value: {}
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



export const dataForGoodTesting: {value: any}[] = [
    {
        value: false
    },
    {
        value: null
    },
    {
        value: undefined
    },
    {
        value: 0
    },
    {
        value: -0
    },
    {
        value: NaN
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
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: []
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
        value: BigInt(1)
    },
    {
        value: {}
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
];

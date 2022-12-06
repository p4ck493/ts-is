

export const dataForGoodTesting: {value: any}[] = [
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
        value: {}
    },
    {
        value: []
    },
    {
        value: Symbol()
    },
    {
        value: NaN
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
];

export const dataForGoodCaseTesting: {value: any}[] = [
    {
        value: 'undefined'
    },
    {
        value: 'null'
    },
];

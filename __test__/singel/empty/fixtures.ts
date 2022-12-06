

export const dataForGoodTesting: {value: any}[] = [
    {
        value: {}
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
        value: []
    },
    {
        value: new Map()
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: {
            property: 1
        }
    },
    {
        value: new Map([['a', 'b']])
    },
    {
        value: null
    },
    {
        value: Symbol()
    },
    {
        value: NaN
    },
    {
        value: 'undefined'
    },
    {
        value: 'null'
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

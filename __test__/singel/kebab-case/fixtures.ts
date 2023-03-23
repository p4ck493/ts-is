export const dataForGoodTesting: {value: any}[] = [
    {
        value: 'hello-world-123'
    },
    {
        value: 'hello123'
    },
    {
        value: 'hello'
    },
    {
        value: 'a1-b2-c3-d4-e5-f'
    },
    {
        value: 'g1-h2-i3-j4-k5-l6'
    },
    {
        value: 'in-kebab-case'
    },
    {
        value: 'undefined'
    },
    {
        value: 'null'
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: 'InPascalCase'
    },
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
    {
        value: 'a1B2c3d4e5f6'
    },
    {
        value: '00:11:22:33:44'
    },
    {
        value: '01-23-45-67-89'
    },
    {
        value: 'a1B2c3d4e5f6g'
    },
    {
        value: 'a1B2c3d4:e5f6'
    },
    {
        value: '0050.348a.7a93'
    },
    {
        value: '3550.b5e7.0124'
    },
    {
        value: '00:11:22:33:44:55'
    },
    {
        value: 'aa:bb:cc:dd:ee:ff'
    },
    {
        value: '01-23-45-67-89-ab'
    },
    {
        value: 'inCamelCase'
    },
    {
        value: 'in_snake_case'
    },
    {
        value: 'in-kebab_snake'
    },
    {
        value: 'in_snake-kebab'
    },
    {
        value: 'inCamel-kebab'
    },
    {
        value: 'inCamel_snake'
    },
    {
        value: 'InPascal-kebab'
    },
    {
        value: 'InPascal_snake'
    },
    {
        value: 'inCamel-kebab_snake'
    },
    {
        value: 'inCamel_snake-kebab'
    },
    {
        value: 'in_snakeCamel-kebab'
    },
    {
        value: 'in_snake-kebabCamel'
    },
    {
        value: 'in_snakeCamelCamel-kebab'
    },
    {
        value: 'in-kebabCamel_snakeCamel-kebab_snake'
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

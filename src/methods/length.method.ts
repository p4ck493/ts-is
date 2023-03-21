import {NumberMethod} from './number.method';

export function LengthMethod(argument: string, ...configList: string[]): boolean {
    const config: {
        case: 0 | 1 // 0 - only min (equal); 1 - min and max (range)
        min: number | undefined,
        max: number | undefined,
        // within: boolean | undefined,
        // more: boolean | undefined,
        // less: boolean | undefined
    } = {
        case: 0,
        min: undefined,
        max: undefined,
        // within: undefined,
        // more: undefined,
        // less: undefined
    };
    configList?.forEach((itemOfConfig: unknown) => {
        if (NumberMethod(Number(itemOfConfig))) {
            if (config.min === undefined) {
                config.min = Number(itemOfConfig);
            } else {
                config.case = 1;
                config.max = Number(itemOfConfig);
                if (config.min > Number(itemOfConfig)) {
                    config.max = config.min;
                    config.min = Number(itemOfConfig);
                }
            }
        }
    });
    if (config.case === 0) {
        return argument.length === config.min
    } else if (config.case === 1) {
        return argument.length > (config.min as number) && argument.length < (config.max as number);
    }
    return false;
}

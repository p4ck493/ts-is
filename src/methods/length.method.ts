import {NumberMethod} from './number.method';
import {isConfig} from '../config';

function toNumber(argument: any): number {
    argument = +argument;
    if (!NumberMethod(argument) && isConfig.error.enabled) {
        console?.error?.('Wrong data in name of function, good examples: is.length_10, is.length_less_10, is.length_more_10, is.length_10_12, is.length_range_10_12');
    }
    return argument;
}

/**
 * Why N:
 * - Note that the symbol "N" is also sometimes used to represent the set of positive integers, but this can be ambiguous, as some definitions of "N" include zero, while others do not.
 *
 * is.length_N
 * is.length_less_N
 * is.length_more_N
 * is.length_N_N
 * is.length_range_N_N
 *
 * @param argument
 * @param configList
 * @constructor
 */
export function LengthMethod(argument: string, ...configList: string[]): boolean {

    const firstConfigItem: string | undefined = configList.shift();

    if (firstConfigItem) {

        const length: number = argument?.length ?? 0;

        if (length) {

            const secondConfigItem: string | undefined = configList.shift();

            if (secondConfigItem) {

                if (firstConfigItem === 'less') {

                    return length < toNumber(secondConfigItem);

                } else if (firstConfigItem === 'more') {

                    return length > toNumber(secondConfigItem);

                } else if (firstConfigItem === 'range') {

                    const thirdConfigItem: string | undefined = configList.shift();

                    if (thirdConfigItem) {

                        return length >= toNumber(secondConfigItem) && length <= toNumber(thirdConfigItem);

                    }

                } else {

                    // is.length_10_15
                    return length > +firstConfigItem && length < +secondConfigItem;

                }

            } else {

                // is.length_10
                return length === toNumber(firstConfigItem)

            }

        }

    }

    return false;

}

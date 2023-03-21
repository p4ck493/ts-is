import { NumberMethod } from './number.method';
import { isConfig } from '../config';
import { NumericMethod } from './numeric.method';

function toNumber(argument: any): number {
  argument = +argument;
  if (!NumberMethod(argument) && isConfig.error.enabled) {
    console?.error?.(`
            Bad data in the method name, good examples: 
            is.len_10
            is.len_gt_10
            is.len_lt_10
            is.len_gt_8_lt_10
            is.len_gte_10
            is.len_gte_8_lt_10
            is.len_gte_8_lte_10
            is.len_lte_10
            is.len_gt_8_lte_10
        `);
  }
  return argument;
}

function operation(command: string, target: number, value: number): boolean {
  if (command === 'gt') {
    return target > value;
  } else if (command === 'gte') {
    return target >= value;
  } else if (command === 'lt') {
    return target < value;
  } else if (command === 'lte') {
    return target <= value;
  }
  return false;
}

/**
 * Why N:
 * - Note that the symbol "N" is also sometimes used to represent the set of positive integers, but this can be
 *   ambiguous, as some definitions of "N" include zero, while others do not.
 *
 * is.len_N
 * is.len_gt_N
 * is.len_lt_N
 * is.len_gt_N_lt_N
 * is.len_gte_N
 * is.len_gte_N_lt_N
 * is.len_gte_N_lte_N
 * is.len_lte_N
 * is.len_gt_N_lte_N
 *
 * @param argument - string
 * @param configList - ['10'] || ['gt', '10']
 */
export function LenMethod(argument: string, ...configList: string[]): boolean {
  const length: number = argument?.length ?? 0;
  if (NumericMethod(configList[0])) {
    return length === toNumber(configList[0]);
  } else {
    for (let index = 0; index < configList.length; index++) {
      if (operation(configList[index], length, toNumber(configList[index + 1]))) {
        if (index + 2 === configList.length) {
          return true;
        } else {
          index++;
        }
      } else {
        return false;
      }
    }
  }
  return false;
}

import {Methods} from './methods';
import {proxyGenerator} from './tools/proxy-generator.tool';
import {IsType} from './types/is.type';

function IsFunction(argument: any) {
  console.error('Dont use the function, is declare for future!');
  return argument;
}

/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.TrueMethod(value);
 * If you need check if true is not true just use this: Is.Not.TrueMethod(value);
 */
export const Is: IsType = proxyGenerator(IsFunction, Methods);

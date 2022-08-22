import {proxyGenerator} from './engine/proxy/generator';
import {IsType} from './types/is.type';

/**
 *
 * Case #1 Method (method from methods list)
 * is.[method]
 * is.truthy
 *
 * Case #2 Model (default use "instanceof" method)
 * is.[model]
 * is.PersonModel
 *
 * Case #3 Connection AND
 * is.[method/model].[method/model]
 * is.string.empty
 *
 * Case #4 Connection OR
 * is.[method/model].or.[method/model]
 * is.null.or.undefined
 *
 * Case #5 Wrapper NOT
 * is.not.[method/model]
 * is.not.number
 *
 * Case #6 Wrapper NOT + Connection AND
 * is.[method/model].not.[method/model]
 * is.object.not.empty
 *
 * Case #7 Wrapper NOT + Connection OR
 * is.not.[method/model].or.[method/model]
 * is.not.null.or.undefined
 *
 * [TODO] Case #8 Wrapper NOT + Connection AND + Connection OR
 * is.[method/model].not.[method/model].or.[method/model]
 * is.truthy.not.object.or.array
 *
 * Case #9 Wrapper ALL
 * is.all.[method/model]
 * is.all.number
 *
 * [TODO] Case #10 Wrapper ALL + Connection AND
 * is.[method/model].all.[method/model]
 * is.array.all.PersonModel
 *
 * Case #11 Wrapper All + Connection OR
 * is.all.[method/model].or.[method/model]
 * is.all.boolean.or.symbol
 *
 * [TODO] Case #12 Wrapper ALL + Connection AND + Connection OR
 * is.[method/model].all.[method/model].or.[method/model]
 * is.object.all.PersonModel.or.number
 *
 * Case #13 Wrapper ALL + Wrapper NOT
 * is.all.not.[method/model]
 * is.all.not.object
 *
 * [TODO] Case #14 Wrapper ALL + Wrapper NOT + Connection AND
 * is.[method/model].all.not.[method/model]
 * is.array.all.not.object
 *
 * Case #15 Wrapper All + Wrapper NOT + Connection OR
 * is.all.not.[method/model].or.[method/model]
 * is.all.not.null.or.undefined
 *
 * [TODO] Case #16 Wrapper ALL + Wrapper NOT + Connection AND + Connection OR
 * is.[method/model].all.not.[method/model].or.[method/model]
 * is.array.all.not.object.or.empty
 *
 */
function defaultFunction(argument: unknown): unknown {
  // TODO return typeof argument or make something cool
  return argument;
}

export const is: IsType = proxyGenerator(defaultFunction);

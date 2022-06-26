import {FlagsToolInterface} from '../../../interfaces/tools/flags.tool.interface';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

declare type proxyRecursiveApplyType = (targetApply: any, thisArg: unknown, argumentList: unknown[]) => ReturnType<typeof targetApply>;
/**
 *
 * Is.String.Or.Number('string') // Returns true
 *
 *
 * Case #1 Model
 * Is.Person(...)
 *
 * Case #2 Method
 * Is.Boolean(...)
 *
 * Case #3 After Wrapper & Method
 * Is.Not.Boolean(...)
 *
 * Case #4 Before Wrapper & Method
 * Is.All.Boolean(...)
 *
 * Case #5 Before & After Wrapper & Method
 * Is.All.Not.Boolean(...)
 *
 * Case #6 Before Wrapper & Model
 * Is.All.Person(...)
 *
 * Case #7 After Wrapper & Model
 * Is.Not.Person(...)
 *
 * Case #8 Connection Wrapper & Method
 * Is.Null.Or.Undefined.Or.Empty(...)
 *
 * Case #9 Before & Connection Wrapper & Method
 * Is.All.String.Or.Number(...)
 *
 * Case #10 Connection & After Wrapper & Method
 * Is.Not.Null.Or.Undefined(...)
 *
 * Case #11 Before & Connection & After Wrapper & Method
 * Is.All.Not.PersonModel.Or.AddressModel(...)
 *
 */
export declare function proxyRecursiveApply(flags: FlagsToolInterface, lists: ListsProxyEngineInterface): proxyRecursiveApplyType;
export {};

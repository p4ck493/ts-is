import {afterWrapperType, beforeWrapperType} from '../types/wrapper.type';
import {FlagsToolInterface} from '../interfaces/tools/flags.tool.interface';

/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 * If found in the path "AfterWrappers" it pushed to queue of "AfterWrappers" and the same of "BeforeWrappers"
 * Examples: Is.All.Not.Boolean([true, false, [0]])
 * Explain: AfterWrappers[BeforeWrappers[[true, false, [0]]]]
 *
 * If need check array of some class, just register the class in modelWrappers, examples:
 *
 * Example #1
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * Object.assign(modelWrappers, {Person});
 *
 * // Later
 * Is.Person.Array([new Person(), true, 0]) // Returns false
 * Is.Not.Person.Array([new Person(), true, 0]) // Returns true
 * Is.Person.Array([new Person(), new Person()]) // Returns true
 * Is.Person.Array([]) // Returns true
 *
 * Example #2
 *
 * @RegisterInIs({ className: 'PersonModel' }) // Or @RegisterInIs() and then call later, as shown in example #1 above
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * // Later
 * Is.PersonModel.Array([new Person(), true, 0]) // Returns false
 * Is.Not.PersonModel.Array([new Person(), true, 0]) // Returns true
 * Is.PersonModel.Array([new Person(), new Person()]) // Returns true
 * Is.PersonModel.Array([]) // Returns true
 * Is.PersonModel(new Address()) // Returns false
 * Is.PersonModel(new Person()) // Returns true
 *
 *
 * @param target must by an object
 * @param name must be a string
 * @param flags TODO text
 * @param beforeWrapperList must be array of before wrappers
 * @param afterWrapperList must be array of after wrappers
 */
export declare function proxyRecursive(target: object, name: string, flags: FlagsToolInterface, beforeWrapperList: beforeWrapperType[], afterWrapperList: afterWrapperType[]): object;

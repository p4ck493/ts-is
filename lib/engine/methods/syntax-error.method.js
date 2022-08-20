import {methods} from './index';

/**
 * @method syntaxError
 */
function SyntaxErrorMethod(argument) {
    return methods.instanceof(argument, SyntaxError);
}
export default SyntaxErrorMethod;

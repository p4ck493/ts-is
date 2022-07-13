/**
 *
 * @method Not
 */
function NotWrapper(result: boolean): result is false {
    return !result;
}

export default NotWrapper;

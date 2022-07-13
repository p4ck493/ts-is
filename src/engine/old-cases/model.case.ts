import Methods from '../methods';

export function modelCase() {
    this.result = Methods.instanceof(this.argumentList[0], this.targetApply);
}

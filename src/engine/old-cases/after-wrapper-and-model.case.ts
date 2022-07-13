import Methods from '../methods';

export function afterWrapperAndModelCase() {

    this.result = Methods.instanceof(this.argumentList[0], this.targetApply);

    // After
    this.result = this.lists.not.reduce((previousValue: any, currentValue: any) => {
        return currentValue(previousValue);
    }, this.result);
}

import Methods from '../methods';

export function beforeWrapperAndModelCase() {
    // Before
    this.result = this.lists.all.reduce((previousValue: any, currentValue: any) => {
        return currentValue(Methods.instanceof, this.argumentList, this.targetApply, previousValue);
    }, this.result);
}

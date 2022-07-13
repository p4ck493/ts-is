import Methods from '../methods';

export function beforeAndAfterWrapperAndModelCase() {

    // Before
    this.result = this.lists.all.reduce((previousValue: any, currentValue: any) => {
        return currentValue(Methods.instanceof, this.argumentList, this.targetApply, previousValue);
    }, this.result);

    // After
    this.result = this.lists.not.reduce((previousValue: any, currentValue: any) => {
        return currentValue(previousValue);
    }, this.result);
}

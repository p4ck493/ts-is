export function beforeWrapperAndMethodCase() {

    this.result = this.lists.all.reduce((previousValue: any, currentValue: any) => {
        return currentValue(this.targetApply, this.argumentList, previousValue);
    }, this.result);
}

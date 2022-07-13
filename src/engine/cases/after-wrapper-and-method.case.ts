export function afterWrapperAndMethodCase() {

    this.result = this.targetApply(...this.argumentList);
    this.result = this.lists.not.reduce((previousValue: any, currentValue: any) => {
        return currentValue(previousValue);
    }, this.result);
}

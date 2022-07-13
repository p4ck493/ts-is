export function beforeAndAfterWrapperAndMethodCase() {
    // Before
    this.result = this.lists.all.reduce((previousValue: any, currentValue: any) => {
        return currentValue(this.targetApply, this.argumentList);
    }, this.result);

    // After
    this.result = this.lists.not.reduce((previousValue: any, currentValue: any) => {
        return currentValue(previousValue);
    }, this.result);
}

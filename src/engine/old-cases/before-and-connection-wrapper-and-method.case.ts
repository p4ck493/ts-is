export function beforeAndConnectionWrapperAndMethodCase() {

    // Before
    this.result = this.lists.all.reduce((previousValue: any, currentValue: any) => {
        // TODO this.lists.connection make reduce
        return currentValue(this.lists.connectionWrapper[0], this.argumentList, this.lists.methods);
    }, this.result);
}

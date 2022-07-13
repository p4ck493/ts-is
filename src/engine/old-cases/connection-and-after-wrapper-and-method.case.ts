export function connectionAndAfterWrapperAndMethodCase() {
    // Connection
    this.result = this.lists.connectionWrapper.reduce((previousValue: any, currentValue: any) => {
        // TODO use previousValue if will add new connection between method or models
        return currentValue(...this.argumentList, this.lists.methods);
    }, this.result);

    // After
    this.result = this.lists.not.reduce((previousValue: any, currentValue: any) => {
        return currentValue(previousValue);
    }, this.result);
}

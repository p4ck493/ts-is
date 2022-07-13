export function connectionWrapperAndMethodCase() {

    // Connection
    this.result = this.lists.connectionWrapper.reduce((previousValue: any, currentValue: any) => {
        // TODO use previousValue if will add new connection between method or models
        return currentValue(...this.argumentList, this.lists.methods);
    }, this.result);
}

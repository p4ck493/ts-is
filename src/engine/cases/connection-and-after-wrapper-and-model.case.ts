import Methods from '../methods';

export function connectionAndAfterWrapperAndModelCase() {

    // Connection
    this.result = this.lists.connectionWrapper.reduce((previousValue: any, currentValue: any) => {
        // TODO use previousValue if will add new connection between method or models
        return currentValue(
            ...this.argumentList,
            this.lists.models.map(() => Methods.instanceof),
            this.lists.models,
        );
    }, this.result);

    // After
    this.result = this.lists.not.reduce((previousValue: any, currentValue: any) => {
        return currentValue(previousValue);
    }, this.result);
}

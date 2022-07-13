import Methods from '../methods';

export function beforeAndConnectionWrapperAndModelCase() {

    // Before
    this.result = this.lists.all.reduce((previousValue: any, currentValue: any) => {
        // TODO this.lists.connection make reduce
        return currentValue(
            this.lists.connectionWrapper[0],
            this.argumentList,
            this.lists.models.map(() => Methods.instanceof),
            this.lists.models,
        );
    }, this.result);
}

import BaseCaseEngine from './base.case.engine';

declare class WrapperOrCaseEngine extends BaseCaseEngine {
    static runCase(): boolean;
}
export default WrapperOrCaseEngine;

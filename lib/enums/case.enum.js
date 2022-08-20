export var CaseEnum;
(function (CaseEnum) {
    CaseEnum[CaseEnum["AND"] = 0] = "AND";
    CaseEnum[CaseEnum["OR"] = 1] = "OR";
    CaseEnum[CaseEnum["WRAPPER_OR"] = 2] = "WRAPPER_OR";
    CaseEnum[CaseEnum["WRAPPER_AND"] = 3] = "WRAPPER_AND";
})(CaseEnum || (CaseEnum = {}));
export default CaseEnum;

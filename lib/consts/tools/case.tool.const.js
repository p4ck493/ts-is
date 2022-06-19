"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseToolConst = void 0;
exports.CaseToolConst = {
    Model: {
        Method: false,
        ModelWrapper: true,
        BeforeWrapper: false,
        AfterWrapper: false,
    },
    Method: {
        Method: true,
        ModelWrapper: false,
        BeforeWrapper: false,
        AfterWrapper: false,
    },
    AfterWrapperAndMethod: {
        Method: true,
        ModelWrapper: false,
        BeforeWrapper: false,
        AfterWrapper: true,
    },
    BeforeWrapperAndMethod: {
        Method: true,
        ModelWrapper: false,
        BeforeWrapper: true,
        AfterWrapper: false,
    },
    BeforeAndAfterWrapperAndMethod: {
        Method: true,
        ModelWrapper: false,
        BeforeWrapper: true,
        AfterWrapper: true,
    },
    BeforeWrapperAndModel: {
        Method: false,
        ModelWrapper: true,
        BeforeWrapper: true,
        AfterWrapper: false,
    },
    AfterWrapperAndModel: {
        Method: false,
        ModelWrapper: true,
        BeforeWrapper: false,
        AfterWrapper: true,
    },
    BeforeAndAfterWrapperAndModel: {
        Method: false,
        ModelWrapper: true,
        BeforeWrapper: true,
        AfterWrapper: true,
    },
};

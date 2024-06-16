"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const globalErrorhandler = ((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "something error";
    const errorSource = [
        {
            path: '',
            message: "something error"
        }
    ];
    return res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        stack: config_1.default.Node_Env === 'development' ? error === null || error === void 0 ? void 0 : error.stack : null
    });
});
exports.default = globalErrorhandler;

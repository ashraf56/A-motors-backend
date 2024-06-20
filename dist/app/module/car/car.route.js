"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoute = void 0;
const express_1 = require("express");
const car_controller_1 = require("./car.controller");
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const router = (0, express_1.Router)();
router.post('/create-car', (0, authGuard_1.default)('admin'), car_controller_1.CarContoller.createCarController);
exports.CarRoute = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoute = void 0;
const express_1 = require("express");
const car_controller_1 = require("./car.controller");
const router = (0, express_1.Router)();
router.post('/create-car', car_controller_1.CarContoller.createCarController);
exports.CarRoute = router;

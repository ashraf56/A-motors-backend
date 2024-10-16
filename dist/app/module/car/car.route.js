"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoute = void 0;
const express_1 = require("express");
const car_controller_1 = require("./car.controller");
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const car_validation_1 = require("./car.validation");
const router = (0, express_1.Router)();
router.put('/return', (0, authGuard_1.default)('admin'), car_controller_1.CarContoller.reTurnCarController);
router.post('/', (0, authGuard_1.default)('admin'), (0, validateRequest_1.default)(car_validation_1.CarValidatons.createAcarValidationSchema), car_controller_1.CarContoller.createCarController);
router.get('/', car_controller_1.CarContoller.getAllCarController);
router.get('/:id', car_controller_1.CarContoller.getSingleCarController);
router.delete('/:id', (0, authGuard_1.default)('admin'), car_controller_1.CarContoller.deleteSingleCarController);
router.put('/:id', (0, authGuard_1.default)('admin'), (0, validateRequest_1.default)(car_validation_1.CarValidatons.updateAcarValidationSchema), car_controller_1.CarContoller.updateSingleCarController);
exports.CarRoute = router;

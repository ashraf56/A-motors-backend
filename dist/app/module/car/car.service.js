"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const trhowErrorHandller_1 = __importDefault(require("../../utills/trhowErrorHandller"));
const car_model_1 = __importDefault(require("./car.model"));
const CreateCarDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existCar = yield car_model_1.default.findOne({ name: payload.name });
    if (existCar) {
        (0, trhowErrorHandller_1.default)("Already  created");
    }
    const cars = yield car_model_1.default.create(payload);
    return cars;
});
const getALlCarInfoFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.find();
    return result;
});
const getSIngleCArDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findById({ _id: id });
    return result;
});
exports.CarService = {
    CreateCarDB,
    getALlCarInfoFromDB,
    getSIngleCArDB
};

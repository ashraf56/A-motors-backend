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
exports.BookingServices = void 0;
const trhowErrorHandller_1 = __importDefault(require("../../utills/trhowErrorHandller"));
const car_model_1 = __importDefault(require("../car/car.model"));
const booking_model_1 = __importDefault(require("./booking.model"));
const user_model_1 = __importDefault(require("../user/user.model"));
const mongoose_1 = require("mongoose");
const createBookingDB = (payload, userID) => __awaiter(void 0, void 0, void 0, function* () {
    const carid = yield car_model_1.default.findById(payload.car);
    if (!carid) {
        (0, trhowErrorHandller_1.default)('car not found');
    }
    // find user id from db
    const user = yield user_model_1.default.findById(userID);
    const session = yield (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        if ((carid === null || carid === void 0 ? void 0 : carid.status) === 'unavailable') {
            (0, trhowErrorHandller_1.default)('Booking not success');
        }
        const info = {
            date: payload.date,
            user: user,
            car: carid,
            startTime: payload.startTime,
            endTime: payload.endTime,
            totalCost: payload.totalCost,
        };
        const createABook = yield booking_model_1.default.create([info], { session });
        if (!createABook) {
            (0, trhowErrorHandller_1.default)('Booking not success');
        }
        const updateSatatus = yield car_model_1.default.findByIdAndUpdate({ _id: payload.car }, {
            $set: {
                status: 'unavailable'
            }
        }, { upsert: true, new: true, session });
        if (!updateSatatus) {
            (0, trhowErrorHandller_1.default)('Booking not success');
        }
        yield session.commitTransaction();
        yield session.endSession();
        const confirmBook = yield booking_model_1.default.findOne(payload.user).populate('user').populate('car');
        return confirmBook;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        (0, trhowErrorHandller_1.default)('Booking not success');
    }
});
const getAllBookingsfromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.find().populate('user').populate('car');
    return result;
});
const updateBookingfromDB = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.BookingServices = {
    createBookingDB,
    getAllBookingsfromDB,
    updateBookingfromDB
};

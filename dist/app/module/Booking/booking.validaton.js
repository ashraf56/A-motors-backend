"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidations = void 0;
const zod_1 = require("zod");
const CreateBookingvzodschema = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.date(),
        user: zod_1.z.string(),
        car: zod_1.z.string(),
        startTime: zod_1.z.string(),
        endTime: zod_1.z.string(),
        totalCost: zod_1.z.number()
    })
});
exports.BookingValidations = {
    CreateBookingvzodschema
};

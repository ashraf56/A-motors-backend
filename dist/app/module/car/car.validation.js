"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarValidatons = void 0;
const zod_1 = require("zod");
const car_constant_1 = require("./car.constant");
const createAcarValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        color: zod_1.z.string(),
        status: zod_1.z.enum([...car_constant_1.Status]),
        feature: zod_1.z.array(zod_1.z.string()),
        isDeleted: zod_1.z.boolean().default(false),
        isElectric: zod_1.z.boolean().optional(),
        pricePerHour: zod_1.z.number(),
    })
});
exports.CarValidatons = {
    createAcarValidationSchema
};

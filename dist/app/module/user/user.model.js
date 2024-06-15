"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    role: {
        type: String,
        default: 'user'
    },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    adress: { type: String, required: true }
});
const User = (0, mongoose_1.model)('user', UserSchema);
exports.default = User;

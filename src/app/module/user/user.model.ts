import { Schema, model } from "mongoose";
import { Userinterface } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config/config";

const UserSchema = new Schema<Userinterface>({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    role: {
        type: String,
        default: 'user'
    },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }

}, {
    timestamps: true
})


UserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, Number(config.saltNumber))
    next()
})

const User = model<Userinterface>('User', UserSchema)

export default User
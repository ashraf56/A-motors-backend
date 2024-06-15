import { Schema, model } from "mongoose";
import { Userinterface } from "./user.interface";


const UserSchema = new Schema<Userinterface>({
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

}, {
    timestamps: true
})




const User = model<Userinterface>('user', UserSchema)

export default User
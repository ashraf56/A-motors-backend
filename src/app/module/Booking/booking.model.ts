import { Schema, model } from "mongoose";
import { BookingInterface } from "./booking.interface";


const BookingSchema = new Schema<BookingInterface>({
    date: { type: Date, required: true },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    startTime: {
        type: String, trim: true, required: true
    },
    endTime: { type: String, trim: true, required: true },
    totalCost: { type: Number, required: true, default: 0 }

}, {
    timestamps: true
})




const Booking = model<BookingInterface>('Booking', BookingSchema)

export default Booking
import { BookingInterface } from "./booking.interface";
import Booking from "./booking.model";

const createBookingDB =async (payload:BookingInterface)=>{
    const result = await Booking.create(payload)
    return result
}



export const BookingServices ={
    createBookingDB
}
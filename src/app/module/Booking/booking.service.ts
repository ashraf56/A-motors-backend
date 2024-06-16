import Car from "../car/car.model";
import { BookingInterface } from "./booking.interface";
import Booking from "./booking.model";

const createBookingDB =async (payload:BookingInterface)=>{

// find user 


const carid =await Car.findById(payload.car)

if (!carid) {
    throw new Error ('car not found')
}
const info = {
    date:payload.date,

    car:carid,
    startTime: payload.startTime,
    endTime: payload.endTime,
    totalCost: payload.totalCost,
}

    const result = await Booking.create(info)
    return result
}



export const BookingServices ={
    createBookingDB
}
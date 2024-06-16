import trhowErrorHandller from "../../utills/trhowErrorHandller";
import Car from "../car/car.model";
import { BookingInterface } from "./booking.interface";
import Booking from "./booking.model";

const createBookingDB = async (payload: BookingInterface) => {


    const carid = await Car.findById(payload.car)

    if (!carid) {
        trhowErrorHandller('car not found')
    }
    const info = {
        date: payload.date,

        car: carid,
        startTime: payload.startTime,
        endTime: payload.endTime,
        totalCost: payload.totalCost,
    }

    const result = await Booking.create(info)
    return result
}



export const BookingServices = {
    createBookingDB
}